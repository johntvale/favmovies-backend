const Movie = require("../models/movieModel")
const User = require("../models/userModel")
const { NOT_FOUND, CONFLICT, INTERNAL_SERVER_ERROR } = require("../utils/httpStatusCode")
const { formatMovie } = require("../utils/objectFormatter")

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

  return formatMovie(createdMovie)
}

const getAllMoviesService = async () => {
  const moviesList = await Movie.find()

  const formattedMoviesList = moviesList.map(movie => {
    return formatMovie(movie)
  })

  return formattedMoviesList
}

const getMovieByIdService = async (movieId) => {
  const movie = await Movie.findById(movieId)
  if (!movie) {
    const error = new Error("Movie not found")
    error.statusCode = NOT_FOUND
    throw error
  }

  return formatMovie(movie)
}

const updateMovieService = async (movieId, movieData) => {
  const isNotUniqueTitle = await Movie.findOne({ title: movieData.title })
  if (isNotUniqueTitle && isNotUniqueTitle._id.toString() !== movieId) {
    const error = new Error("Movie title already exists")
    error.statusCode = CONFLICT
    throw error
  }

  const updatedMovie = await Movie.findByIdAndUpdate(movieId, movieData, { new: true })
  if (!updatedMovie) {
    const error = new Error("Movie update failed")
    error.statusCode = INTERNAL_SERVER_ERROR
    throw error
  }

  return formatMovie(updatedMovie)
}

const deleteMovieService = async (movieId) => {
  const deletedMovie = await Movie.findByIdAndDelete(movieId)
  if (!deletedMovie) {
    const error = new Error("Movie deletion failed")
    error.statusCode = INTERNAL_SERVER_ERROR
    throw error
  }

  return formatMovie(deletedMovie)
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
    const error = new Error("Movie already marked as favorite")
    error.statusCode = CONFLICT
    throw error
  }  
  
  const markedAsFavoriteMovie = await Movie.findByIdAndUpdate(
    movieId,
    {
      $addToSet: { favorite: { user: userId, favorite: true } },
      $inc: { favoriteCount: 1 }
    },
    { new: true }
  )

  if (!markedAsFavoriteMovie) {
    const error = new Error("Movie update failed")
    error.statusCode = INTERNAL_SERVER_ERROR
    throw error
  }
  
  return formatMovie(markedAsFavoriteMovie)
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
    const error = new Error("Movie is not favorited by user")
    error.statusCode = CONFLICT
    throw error
  }

  const unmarkedAsFavoriteMovie = await Movie.findByIdAndUpdate(
    movieId,
    {
      $pull: { favorite: { user: userId, favorite: true } },
      $inc: { favoriteCount: -1 }
    },
    { new: true }
  )

  if (!unmarkedAsFavoriteMovie) {
    const error = new Error("Movie update failed")
    error.statusCode = INTERNAL_SERVER_ERROR
    throw error
  }

  return formatMovie(unmarkedAsFavoriteMovie)
}

const updateViewMovieService = async (userId, movieId) => {
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

  const alreadyViewed = movie.views?.some(v => v.user.toString() === userId);

  let updatedMovie;

  if (!alreadyViewed) {
    updatedMovie = await Movie.findByIdAndUpdate(
      movieId,
      {
        $addToSet: { views: { user: userId, view: true } },
        $inc: { viewCount: 1 }
      },
      { new: true }
    );
  } else {
    updatedMovie = movie;
  }

  if (!updatedMovie) {
    const error = new Error("Movie update failed");
    error.statusCode = INTERNAL_SERVER_ERROR;
    throw error;
  }

  return formatMovie(updatedMovie);
};

const ratingMovieService = async (userId, movieId, score) => {
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

  const existingRating = movie.ratings?.find(rating => rating.user.toString() === userId);
  if (existingRating) {
    existingRating.score = score;
  } else {
    movie.ratings.push({ user: userId, score });
  }

  const totalScore = movie.ratings.reduce((acc, rating) => acc + rating.score, 0);
  const ratingListCount = movie.ratings.length;
  const average = ratingListCount ? parseFloat((totalScore / ratingListCount).toFixed(2)) : 0;
  
  movie.averageRating = average;
  await movie.save();

  const updatedMovie = await Movie.findById(movieId);
  if (!updatedMovie) {
    const error = new Error("Movie update failed");
    error.statusCode = INTERNAL_SERVER_ERROR;
    throw error;
  }

  return formatMovie(updatedMovie)
}

module.exports = {
  createMovieService,
  getAllMoviesService,
  getMovieByIdService,
  updateMovieService,
  deleteMovieService,
  markAsFavoriteMovieService,
  unmarkFavoriteMovieService,
  updateViewMovieService,
  ratingMovieService
}