const User = require('../models/userModel');
const Movie = require('../models/movieModel');
const { NOT_FOUND, CONFLICT } = require('../utils/httpStatusCode');
const { markAsFavoriteMovieService, unmarkFavoriteMovieService } = require('./movieService');

const addToFavoriteListService = async (userId, movieId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const movie = await Movie.findById(movieId);
  if (!movie) {
    const error = new Error('Movie not found');
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const isMovieInList = user.favoriteList.some((movie) => movie._id.toString() === movieId);
  if (isMovieInList) {
    return {
      "message": 'Movie already in favorite list',
      "Favorite List": user.favoriteList
    };
  }

  const favoritedMovie = await User.findByIdAndUpdate(
    userId,
    { $push: { favoriteList: movieId } },
    { new: true }
  );

  if (!favoritedMovie) {
    const error = new Error('Error adding movie to favorite list');
    error.statusCode = CONFLICT;
    throw error;
  }

  const updatedList = await User.findById(userId)
  if (!updatedList.favoriteList) {
    const error = new Error('Error fetching updated favorite list');
    error.statusCode = CONFLICT;
    throw error;
  }

  const result = await markAsFavoriteMovieService(userId, movieId);

  if (!result) {
    return { message: 'Error marking movie as favorite' };
  }

  const favoriteList = {
    "Message": "Movie added to favorite list",
    "Favorite List": updatedList.favoriteList,
  }

  return favoriteList;
}

const removeFromFavoriteListService = async (userId, movieId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const movie = await Movie.findById(movieId);
  if (!movie) {
    const error = new Error('Movie not found');
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const isMovieInList = user.favoriteList.some((movie) => movie._id.toString() === movieId);
  if (!isMovieInList) {
    return {
      message: 'Movie was not in favorite list',
      "Favorite List": user.favoriteList
    };
  }

  const removeFromList = await User.findByIdAndUpdate(
    userId,
    { $pull: { favoriteList: movieId } },
    { new: true }
  );
  if (!removeFromList) {
    const error = new Error('Error removing movie from favorite list');
    error.statusCode = CONFLICT;
    throw error;
  }

  const removedFromList = await User.findById(userId)
  if (!removedFromList) {
    const error = new Error('Error fetching updated favorite list');
    error.statusCode = CONFLICT;
    throw error;
  }

  const result = await unmarkFavoriteMovieService(userId, movieId);
  if (!result) {
    return {
      "message": 'Error unmarking movie as favorite',
      "Favorite List": removedFromList.favoriteList
    };
  }

  const favoriteList = {
    "Message": "Movie removed from favorite list",
    "Favorite List": removedFromList.favoriteList,
  }

  return favoriteList;
}

const addToWatchedListService = async (userId, movieId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const movie = await Movie.findById(movieId);
  if (!movie) {
    const error = new Error('Movie not found');
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const isMovieInList = user.watchedList.some((movie) => movie._id.toString() === movieId);
  if (isMovieInList) {
    return {
      "message": 'Movie already in watched list',
      "Watched List": user.watchedList
    };
  }

  const addedToWatchedList = await User.findByIdAndUpdate(
    userId,
    { $push: { watchedList: movieId } },
    { new: true }
  );
  if (!addedToWatchedList) {
    const error = new Error('Error adding movie to watched list');
    error.statusCode = CONFLICT;
    throw error;
  }

  const updatedList = await User.findById(userId)
  if (!updatedList) {
    const error = new Error('Error fetching updated watched list');
    error.statusCode = CONFLICT;
    throw error;
  }

  const result = {
    "Message": "Movie added to watched list",
    "Watched List": updatedList.watchedList,
  }

  return result;
}

const removeFromWatchedListService = async (userId, movieId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const movie = await Movie.findById(movieId);
  if (!movie) {
    const error = new Error('Movie not found');
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const isMovieInList = user.watchedList.some((movie) => movie._id.toString() === movieId);
  if (!isMovieInList) {
    return {
      "message": 'Movie was not in watched list',
      "Watched List": user.watchedList
    };
  }

  const removedFromList = await User.findByIdAndUpdate(
    userId,
    { $pull: { watchedList: movieId } },
    { new: true }
  );
  if (!removedFromList) {
    const error = new Error('Error removing movie from watch list');
    error.statusCode = CONFLICT;
    throw error;
  }

  const updatedList = User.findById(userId)
  if (!updatedList) {
    const error = new Error('Error fetching updated watch list');
    error.statusCode = CONFLICT;
    throw error;
  }

  const result = {
    "Message": "Movie removed from watched list",
    "Watched List": updatedList.watchedList,
  }

  return result;
}

const addToWatchLaterListService = async (userId, movieId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const movie = await Movie.findById(movieId);
  if (!movie) {
    const error = new Error('Movie not found');
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const isMovieInList = user.watchLaterList.some((movie) => movie._id.toString() === movieId);
  if (isMovieInList) {
    return {
      "message": 'Movie already in watch later list',
      "Watch Later List": user.watchLaterList
    };
  }

  const addedToWatchLaterList = await User.findByIdAndUpdate(
    userId,
    { $push: { watchLaterList: movieId } },
    { new: true }
  );
  if (!addedToWatchLaterList) {
    const error = new Error('Error adding movie to watch later list');
    error.statusCode = CONFLICT;
    throw error;
  }

  const updatedList = await User.findById(userId)
  if (!updatedList) {
    const error = new Error('Error fetching updated watch later list');
    error.statusCode = CONFLICT;
    throw error;
  }

  const result = {
    "Message": "Movie added to watch later list",
    "Watch Later List": updatedList.watchLaterList,
  }

  return result;
}

const removeFromWatchLaterListService = async (userId, movieId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const movie = await Movie.findById(movieId);
  if (!movie) {
    const error = new Error('Movie not found');
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const isMovieInList = user.watchLaterList.some((movie) => movie._id.toString() === movieId);
  if (!isMovieInList) {
    return {
      "message": 'Movie was not in watch later list',
      "Watch Later List": user.watchLaterList
    };
  }

  const removedFromList = await User.findByIdAndUpdate(
    userId,
    { $pull: { watchLaterList: movieId } },
    { new: true }
  );
  if (!removedFromList) {
    const error = new Error('Error removing movie from watch later list');
    error.statusCode = CONFLICT;
    throw error;
  }

  const updatedList = await User.findById(userId)
    
  if (!updatedList) {
    const error = new Error('Error fetching updated watch later list');
    error.statusCode = CONFLICT;
    throw error;
  }

  const result = {
    "Message": "Movie removed from watch later list",
    "Watch Later List": updatedList.watchLaterList,
  }

  return result;
}

module.exports = {
  addToFavoriteListService,
  removeFromFavoriteListService,
  addToWatchedListService,
  removeFromWatchedListService,
  addToWatchLaterListService,
  removeFromWatchLaterListService
};