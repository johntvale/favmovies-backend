const { isValidMovie, isValidToUpdateMovie } = require("../joiValidators/movieValidation");
const { createMovieService, getAllMoviesService, getByIdMovieService, updateMovieService, deleteMovieService, addOrUpdateViewMovieService, addOrUpdateRatingMovieService } = require("../services/movieService");
const { BAD_REQUEST, CREATED, OK } = require("../utils/httpStatusCode");

const createMovieController = async (req, res, next) => {
  try {
    const movieData = req.body;
    const { error } = isValidMovie(movieData);
    if (error) {
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    const createdMovie = await createMovieService(movieData)
    res.status(CREATED).json(createdMovie)
  } catch (error) {
    next(error);
  }
}

const getMoviesController = async (req, res, next) => {
  try {
    const moviesList = await getAllMoviesService();
    res.status(OK).json(moviesList);
  } catch (error) {
    next(error);
  }
}

const getMovieController = async (req, res, next) => {
  try {
    const movieId = req.params.id;
    if (movieId.length !== 24) {
      const error = new Error("Invalid movie ID format");
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    const movie = await getByIdMovieService(movieId);
    res.status(OK).json(movie);
  } catch (error) {
    next(error);
  }
}

const updateMovieController = async (req, res, next) => {
  try {
    const movieId = req.params.id;
    const movieData = req.body;

    if (movieId.length !== 24) {
      const error = new Error("Invalid movie ID format");
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    if (Object.keys(movieData).length < 1) {
      const error = new Error("At least one property is required to update");
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    const { error } = isValidToUpdateMovie(movieData);
    if (error) {
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    const updatedMovie = await updateMovieService(movieId, movieData);
    res.status(OK).json(updatedMovie);
  } catch (error) {
    next(error);
  }
}

const deleteMovieController = async (req, res, next) => {
  try {
    const movieId = req.params.id;
    if (movieId.length !== 24) {
      const error = new Error("Invalid movie ID format");
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    const deletedMovie = await deleteMovieService(movieId);
    res.status(OK).json(deletedMovie);
  } catch (error) {
    next(error);
  }
}

const addOrUpdateViewController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const movieId = req.params.id;

    if (movieId.length !== 24) {
      const error = new Error("Invalid movie ID format");
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    const updatedMovie = await addOrUpdateViewMovieService(userId, movieId);
    res.status(OK).json(updatedMovie);
  } catch (error) {
    next(error);
  }
}

const addOrUpdateRatingMovieController = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const movieId = req.params.id;
    let { rating } = req.body;

    if (movieId.length !== 24) {
      const error = new Error("Invalid movie ID format");
      error.statusCode = BAD_REQUEST;
      throw error;
    }
    if (!rating) {
      const error = new Error("Rating is required");
      error.statusCode = BAD_REQUEST;
      throw error;
    }

    rating = parseFloat(rating);

    const updatedMovie = await addOrUpdateRatingMovieService(userId, movieId, rating);
    res.status(OK).json(updatedMovie);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMovieController,
  getMoviesController,
  getMovieController,
  updateMovieController,
  deleteMovieController,
  addOrUpdateViewController,
  addOrUpdateRatingMovieController
}