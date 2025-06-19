const Movie = require('../models/movieModel');

const startOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);

async function getDashboardInsights() {
  // FAVORITES
  const top3Favorites = await Movie.find().sort({ favoriteCount: -1 }).limit(3);

  const mostFavoriteMovieOfTheMonth = await Movie.aggregate([
    { $unwind: '$favorite' },
    {
      $match: {
        'favorite.createdAt': { $gte: startOfMonth },
        'favorite.favorite': true
      }
    },
    {
      $group: {
        _id: '$_id',
        title: { $first: '$title' },
        imageUrl: { $first: '$imageUrl' },
        monthlyFavorites: { $sum: 1 }
      }
    },
    { $sort: { monthlyFavorites: -1 } },
    { $limit: 1 },
    { $project: { _id: 1, title: 1, imageUrl: 1, favoriteCount: "$monthlyFavorites" } }
  ]);

  const totalMovies = await Movie.countDocuments();

  const totalFavorites = await Movie.aggregate([
    { $group: { _id: null, total: { $sum: "$favoriteCount" } } },
  ]);

  const moviesMarkedAsFavorite = await Movie.countDocuments({ favoriteCount: { $gt: 0 } });
  
  const percentageOfFavorited = totalMovies > 0 ? ((moviesMarkedAsFavorite / totalMovies) * 100).toFixed(2) : 0;

  // WATCHED
  const top3MostWatched = await Movie.find().sort({ viewCount: -1 }).limit(3);

  const mostWatchedOfTheMonth = await Movie.aggregate([
    { $unwind: '$view' },
    {
      $match: {
        'view.createdAt': { $gte: startOfMonth }
      }
    },
    {
      $group: {
        _id: '$_id',
        title: { $first: '$title' },
        imageUrl: { $first: '$imageUrl' },
        monthlyViews: { $sum: '$view.view' }
      }
    },
    { $sort: { monthlyViews: -1 } },
    { $limit: 1 },
    { $project: { _id: 1, title: 1, imageUrl: 1, viewCount: "$monthlyViews" } }
  ]);

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

  const mostRatedMovieOfTheMonth = await Movie.aggregate([
    { $unwind: '$ratings' },
    {
      $match: {
        'ratings.createdAt': { $gte: startOfMonth }
      }
    },
    {
      $group: {
        _id: '$_id',
        title: { $first: '$title' },
        imageUrl: { $first: '$imageUrl' },
        averageMonthlyRating: { $avg: '$ratings.score' },
        totalRatings: { $sum: 1 }
      }
    },
    { $sort: { averageMonthlyRating: -1, totalRatings: -1 } },
    { $limit: 1 },
    { $project: { _id: 1, title: 1, imageUrl: 1, averageRating: "$averageMonthlyRating" } }
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
        mostFavoriteMovieOfTheMonth,
        miniCards: {
          totalMovies,
          totalFavoriteMarks: totalFavorites[0]?.total || 0,
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
        mostRatedMovieOfTheMonth,
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
