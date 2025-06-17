const Movie = require('../models/movieModel');

const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

async function getDashboardInsights() {
  // FAVORITES
  const top3Favorites = await Movie.find().sort({ favoriteCount: -1 }).limit(3);

  const favoriteMovieOfTheMonth = await Movie.findOne({
    createdAt: { $gte: startOfMonth }
  }).sort({ favoriteCount: -1 });

  const totalMovies = await Movie.countDocuments();
  const totalFavorites = await Movie.aggregate([
    { $group: { _id: null, total: { $sum: "$favoriteCount" } } },
  ]);
  const moviesMarkedAsFavorite = await Movie.countDocuments({ favoriteCount: { $gt: 0 } });
  const percentageOfFavorited = totalMovies > 0 ? ((moviesMarkedAsFavorite / totalMovies) * 100).toFixed(2) : 0;

  // WATCHED
  const top3MostWatched = await Movie.find().sort({ viewCount: -1 }).limit(3);

  const mostWatchedOfTheMonth = await Movie.findOne({
    createdAt: { $gte: startOfMonth }
  }).sort({ viewCount: -1 });

  const totalViews = await Movie.aggregate([
    { $group: { _id: null, total: { $sum: "$viewCount" } } },
  ]);

  const watchedMovied = await Movie.countDocuments({ viewCount: { $gt: 0 } });
  const percentageOfWatchedMovies = totalMovies > 0 ? ((watchedMovied / totalMovies) * 100).toFixed(2) : 0;

  const userWhoWatchedTheMostMovies = await Movie.aggregate([
    { $unwind: "$view" },
    { $group: { _id: "$view.user", totalViews: { $sum: "$view.view" } } },
    { $sort: { totalViews: -1 } },
    { $limit: 1 },
    { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },
    { $unwind: "$user" },
    { $project: { name: "$user.name", totalViews: 1 } }
  ]);

  // RATINGS
  const top3Ratings = await Movie.find({ averageRating: { $gt: 0 } }).sort({ averageRating: -1 }).limit(3);

  const userWithHighestEngagement = await Movie.aggregate([
    {
      $project: {
        title: 1,
        engagement: {
          $add: ["$viewCount", "$favoriteCount", { $size: "$ratings" }]
        },
        averageRating: 1
      }
    },
    { $sort: { engagement: -1 } },
    { $limit: 1 }
  ]);

  const totalRatings = await Movie.aggregate([
    { $project: { count: { $size: "$ratings" } } },
    { $group: { _id: null, total: { $sum: "$count" } } }
  ]);

  const overallRatingAverage = await Movie.aggregate([
    { $match: { averageRating: { $gt: 0 } } },
    { $group: { _id: null, averageRating: { $avg: "$averageRating" } } }
  ]);

  const userWhoRatedTheMostMovies = await Movie.aggregate([
    { $unwind: "$ratings" },
    { $group: { _id: "$ratings.user", total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 1 },
    { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },
    { $unwind: "$user" },
    { $project: { name: "$user.name", total: 1 } }
  ]);

  const result = {
    message: "insights successfully generated",
    insights: {
      favorites: {
        top3Favorites,
        favoriteMovieOfTheMonth,
        miniCards: {
          totalMovies,
          totalFavorites: totalFavorites[0]?.total || 0,
          percentageOfFavorited
        }
      },
      watched: {
        top3MostWatched,
        mostWatchedOfTheMonth,
        miniCards: {
          totalViews: totalViews[0]?.total || 0,
          percentageOfWatchedMovies,
          userWhoWatchedTheMostMovies: userWhoWatchedTheMostMovies[0] || null
        }
      },
      ratings: {
        top3Ratings,
        userWithHighestEngagement: userWithHighestEngagement[0] || null,
        miniCards: {
          totalRatings: totalRatings[0]?.total || 0,
          overallRatingAverage: overallRatingAverage[0]?.averageRating?.toFixed(2) || 0,
          userWhoRatedTheMostMovies: userWhoRatedTheMostMovies[0] || null
        }
      }
    }
  };

  return result;
}

module.exports = {
  getDashboardInsights
};
