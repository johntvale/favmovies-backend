const movieList = require("./movieList");
const { insertManyMoviesService } = require('../services/movieService');

const movieListInit = async () => {
  try {
    await insertManyMoviesService(movieList);
    console.log('Movie list initialized successfully');
  } catch (error) {
    console.error('Error initializing Movie List:', error.message);
  }
}

module.exports = movieListInit;