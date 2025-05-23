const { BAD_REQUEST, OK } = require("../utils/httpStatusCode");
const {
  addToFavoriteListService,
  removeFromFavoriteListService,
  addToWatchedListService,
  removeFromWatchedListService,
  addToWatchLaterListService,
  removeFromWatchLaterListService,
} = require("../services/userMovieListService");

const addMovieToFavoriteListController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const movieId = req.params.id;

    if (movieId.length !== 24) {
      const error = new Error("Invalid movie ID format");
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    const favoriteList = await addToFavoriteListService(userId, movieId);
    res.status(OK).json(favoriteList);
  } catch (error) {
    next(error);
  }
}

const removeMovieFromFavoriteListController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const movieId = req.params.id;

    if (movieId.length !== 24) {
      const error = new Error("Invalid movie ID format");
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    const favoriteList = await removeFromFavoriteListService(userId, movieId);
    res.status(OK).json(favoriteList);
  } catch (error) {
    next(error);
  }
}

const addMovieToWatchedListController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const movieId = req.params.id;
    if (movieId.length !== 24) {
      const error = new Error("Invalid movie ID format");
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    const addedToWatchList = await addToWatchedListService(userId, movieId);
    res.status(OK).json(addedToWatchList);
  } catch (error) {
    next(error);
  }
}

const removeMovieToWatchedListController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const movieId = req.params.id;
    if (movieId.length !== 24) {
      const error = new Error("Invalid movie ID format");
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    const removedFromWatchedList = await removeFromWatchedListService(userId, movieId);
    res.status(OK).json(removedFromWatchedList);
  } catch (error) {
    next(error);
  }
}

const addMovieToWatchLaterListController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const movieId = req.params.id;
    if (movieId.length !== 24) {
      const error = new Error("Invalid movie ID format");
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    const addedToWatchLaterList = await addToWatchLaterListService(userId, movieId); 
    res.status(OK).json(addedToWatchLaterList);
  } catch (error) {
    next(error);
  }
}

const removeMovieFromWatchLaterListController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const movieId = req.params.id;
    if (movieId.length !== 24) {
      const error = new Error("Invalid movie ID format");
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    const removedFromWatchLaterList = await removeFromWatchLaterListService(userId, movieId);
    res.status(OK).json(removedFromWatchLaterList);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addMovieToFavoriteListController,
  removeMovieFromFavoriteListController,
  addMovieToWatchedListController,
  removeMovieToWatchedListController,
  addMovieToWatchLaterListController,
  removeMovieFromWatchLaterListController,
}