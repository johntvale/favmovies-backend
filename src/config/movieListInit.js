const movieList = require("./movieList");
const { insertManyMoviesService } = require('../services/movieService');
const Movie = require("../models/movieModel");

const movieListInit = async () => {
  try {
    const isDatabasePopulated = await Movie.countDocuments() > 0;
    if (isDatabasePopulated) {
      return console.log('Movie list already initialized');
    }

    const result = await insertManyMoviesService(movieList);
    if (result && result.movies.length > 0) {
      console.log('Movie list initialized successfully');
    }
  } catch (error) {
    console.error('Error initializing Movie List:', error.message);
  }
}

module.exports = movieListInit;