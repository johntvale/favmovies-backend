const Movie = require("../models/movieModel")
const User = require("../models/userModel")
const { NOT_FOUND, CONFLICT, INTERNAL_SERVER_ERROR, BAD_REQUEST } = require("../utils/httpStatusCode")

const createMovieService = async (movieData) => {
  const isNotUniqueTitle = await Movie.findOne({ title: movieData.title })
  if (isNotUniqueTitle) {
    const error = new Error("Movie title already exists")
    error.statusCode = CONFLICT
    throw error
  }

  const createdMovie = await Movie.create(movieData)
  if (!createdMovie) {
    const error = new Error("Movie creation failed")
    error.statusCode = INTERNAL_SERVER_ERROR
    throw error
  }

  const result = {
    "message": "Movie created successfully",
    "movie": createdMovie
  }

  return result
}

const getAllMoviesService = async () => {
  const moviesList = await Movie.find()
  if (!moviesList) {
    const error = new Error("No movies found")
    error.statusCode = NOT_FOUND
    throw error
  }

  const result = {
    "message": "Movies retrieved successfully",
    "movies": moviesList
  }

  return result;
}

const getByIdMovieService = async (movieId) => {
  const movie = await Movie.findById(movieId)
    .populate('ratings.user')
    .populate('view.user')
    .populate('favorite.user');
  if (!movie) {
    const error = new Error("Movie not found")
    error.statusCode = NOT_FOUND
    throw error
  }

  const result = {
    "message": "Movie retrieved successfully",
    "movie": movie
  }
  return result
}

const updateMovieService = async (movieId, movieData) => {
  const isNotUniqueTitle = movieData.title 
    ? await Movie.findOne({ title: movieData.title }) 
    : null;

  if (isNotUniqueTitle && isNotUniqueTitle._id.toString() !== movieId) {
    const error = new Error("Movie title already exists");
    error.statusCode = CONFLICT;
    throw error;
  }

  const updatedMovie = await Movie.findByIdAndUpdate(
    movieId, 
    { $set: movieData }, 
    { new: true, runValidators: true }
  );

  if (!updatedMovie) {
    const error = new Error("Movie update failed");
    error.statusCode = INTERNAL_SERVER_ERROR;
    throw error;
  }

  const populatedMovie = await Movie.findById(movieId)
  if (!populatedMovie) {
    const error = new Error("Movie update failed");
    error.statusCode = INTERNAL_SERVER_ERROR;
    throw error;
  }

  const result = {
    "message": "Movie updated successfully",
    "movie": populatedMovie
  }

  return result;
};

const deleteMovieService = async (movieId) => {
  const deletedMovie = await Movie.findByIdAndDelete(movieId)
  if (!deletedMovie) {
    const error = new Error("Movie deletion failed")
    error.statusCode = INTERNAL_SERVER_ERROR
    throw error
  }

  const result = {
    "message": "Movie deleted successfully",
    "movie": deletedMovie
  }

  return result
}

const markAsFavoriteMovieService = async (userId, movieId) => {
  const user = await User.findById(userId)
  if (!user) {
    const error = new Error("User not found")
    error.statusCode = NOT_FOUND
    throw error
  }

  const movie = await Movie.findById(movieId)
  if (!movie) {
    const error = new Error("Movie not found")
    error.statusCode = NOT_FOUND
    throw error
  }

  const alreadyMarkedAsFavorite = movie.favorite.find(fav => fav.user.toString() === userId)
  if (alreadyMarkedAsFavorite) {
    return { "message": "Movie already marked as favorite" }
  }  
  
  const markAsFavoriteMovie = await Movie.findByIdAndUpdate(
    movieId,
    {
      $addToSet: { favorite: { user: userId, favorite: true } },
      $inc: { favoriteCount: 1 }
    },
    { new: true },
  )

  if (!markAsFavoriteMovie) {
    const error = new Error("Movie update failed")
    error.statusCode = INTERNAL_SERVER_ERROR
    throw error
  }

  const markedAsFavorite = await Movie.findById(movieId)
  if (!markedAsFavorite) {
    const error = new Error("Movie update failed")
    error.statusCode = INTERNAL_SERVER_ERROR
    throw error
  }
  
  return markedAsFavorite ? true : false
}

const unmarkFavoriteMovieService = async (userId, movieId) => {
  const user = await User.findById(userId)
  if (!user) {
    const error = new Error("User not found")
    error.statusCode = NOT_FOUND
    throw error
  }

  const movie = await Movie.findById(movieId)
  if (!movie) {
    const error = new Error("Movie not found")
    error.statusCode = NOT_FOUND
    throw error
  }

  const alreadyMarkedAsFavorite = movie.favorite.find(fav => fav.user.toString() === userId)
  if (!alreadyMarkedAsFavorite) {
    return { "message": "Movie was not marked as favorite by user" }
  }

  const unmarkFavoriteMovie = await Movie.findByIdAndUpdate(
    movieId,
    {
      $pull: { favorite: { user: userId, favorite: true } },
      $inc: { favoriteCount: -1 }
    },
    { new: true }
  )

  if (!unmarkFavoriteMovie) {
    const error = new Error("Movie update failed")
    error.statusCode = INTERNAL_SERVER_ERROR
    throw error
  }

  const unmarkedFavoriteMovie = await Movie.findById(movieId)
  if (!unmarkedFavoriteMovie) {
    const error = new Error("Movie update failed")
    error.statusCode = INTERNAL_SERVER_ERROR
    throw error
  }

  const result = unmarkedFavoriteMovie.favorite.find(fav => fav.user.toString() === userId) ? false : true
  return result
}

const addOrUpdateViewMovieService = async (userId, movieId) => {
  const user = await User.findById(userId)
  if (!user) {
    const error = new Error("User not found")
    error.statusCode = NOT_FOUND
    throw error
  }

  const movie = await Movie.findById(movieId)
  if (!movie) {
    const error = new Error("Movie not found")
    error.statusCode = NOT_FOUND
    throw error
  }
  
  const alreadyViewedByUser = movie.view.find(v => v.user.toString() === userId)
  if (alreadyViewedByUser) {
      const updateMovie = await Movie.findByIdAndUpdate(
      { _id: movieId },
      {
        $inc: {
          viewCount: 1,
          "view.$[elem].view": 1
        }
      },
      {
        arrayFilters: [{ "elem.user": userId }],
        new: true
      }
      );
      if (!updateMovie) {
        const error = new Error("Movie update failed")
        error.statusCode = INTERNAL_SERVER_ERROR
        throw error
      }
    return {
      "message": "Movie already viewed by user"
    }
  }

  const updateMovie = await Movie.findByIdAndUpdate(
    movieId,
    {
      $addToSet: { view: { user: userId, view: 1 } },
      $inc: { viewCount: 1 }
    },
    { new: true }
  );
  if (!updateMovie) {
    const error = new Error("Movie update failed")
    error.statusCode = INTERNAL_SERVER_ERROR
    throw error
  }

  const updatedMovie = await Movie.findById(movieId)
  if (!updatedMovie) {
    const error = new Error("Movie update failed")
    error.statusCode = INTERNAL_SERVER_ERROR
    throw error
  }

  const result = {
    "message": "Movie views updated successfully",
    "movie views": updatedMovie.view,
    "view count": updatedMovie.viewCount
  }

  return result
};

const addOrUpdateRatingMovieService = async (userId, movieId, score) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const movie = await Movie.findById(movieId);
  if (!movie) {
    const error = new Error("Movie not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }

  if (isNaN(score) || score < 0 || score > 5) {
    const error = new Error("Rating must be between 1 and 5");
    error.statusCode = BAD_REQUEST;
    throw error;
  }

  const existingRating = movie.ratings.find(rating => rating.user.toString() === userId);
  if (existingRating) {
    existingRating.score = score;
    await movie.save();
  } else {
    movie.ratings.push({ user: userId, score });
    await movie.save();
  }

  const totalScore = movie.ratings.reduce((acc, rating) => acc + rating.score, 0);
  const ratingListCount = movie.ratings.length;
  const average = ratingListCount ? parseFloat((totalScore / ratingListCount).toFixed(2)) : 0;
  
  movie.averageRating = average;
  await movie.save();

  const updatedMovie = await Movie.findById(movieId)
  if (!updatedMovie) {
    const error = new Error("Movie update failed");
    error.statusCode = INTERNAL_SERVER_ERROR;
    throw error;
  }

  const result = {
    "message": "Movie rating updated successfully",
    "movie ratings": updatedMovie.ratings,
    "average rating": updatedMovie.averageRating
  }

  return result
}

module.exports = {
  createMovieService,
  getAllMoviesService,
  getByIdMovieService,
  updateMovieService,
  deleteMovieService,
  markAsFavoriteMovieService,
  unmarkFavoriteMovieService,
  addOrUpdateViewMovieService,
  addOrUpdateRatingMovieService
}