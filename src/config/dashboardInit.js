const User = require("../models/userModel");
const Movie = require("../models/movieModel");

async function populateMovieAndUserData() {
  const users = await User.find();
  const movies = await Movie.find();

  // Ignora o admin
  const nonAdminUsers = users.filter(user => user.role !== 'admin');
  const userIds = nonAdminUsers.map(user => user._id);
  const movieIds = movies.map(movie => movie._id);

  // Define quantidades fixas para atender aos requisitos
  const moviesToView = movies.slice(0, Math.ceil(movies.length * 0.9));
  const moviesToFavorite = movies.slice(0, Math.ceil(movies.length * 0.8));
  const moviesToRate = movies.slice(0, Math.ceil(movies.length * 0.8));

  // Atualiza dados nos filmes
  for (const movie of movies) {
    const viewUsers = moviesToView.includes(movie) ? userIds : [];
    const favoriteUsers = moviesToFavorite.includes(movie) ? userIds.slice(0, 4) : [];
    const ratingUsers = moviesToRate.includes(movie) ? userIds.slice(0, 4) : [];

    // Views (alguns com 20 visualizações)
    movie.view = viewUsers.map((userId, i) => ({
      user: userId,
      view: i < 2 ? 20 : 1
    }));
    movie.viewCount = movie.view.reduce((sum, entry) => sum + entry.view, 0);

    // Favoritos
    movie.favorite = favoriteUsers.map(userId => ({
      user: userId,
      favorite: true
    }));
    movie.favoriteCount = favoriteUsers.length;

    // Ratings (notas fixas)
    movie.ratings = ratingUsers.map((userId, i) => ({
      user: userId,
      score: 3 + (i % 3) // 3, 4, 5, 3
    }));
    movie.averageRating = movie.ratings.length
      ? (movie.ratings.reduce((sum, r) => sum + r.score, 0) / movie.ratings.length).toFixed(1)
      : 0;

    await movie.save();
  }

  // Atualiza dados nos usuários
  for (const user of nonAdminUsers) {
    user.watchedList = movieIds.slice(0, 3);
    user.favoriteList = movieIds.slice(0, 3);
    user.watchLaterList = movieIds.slice(3, 6);

    await user.save();
  }
}

const dashboardInit = async () => {
  try {
    await populateMovieAndUserData();
    console.log('Dashboard initialized successfully');
  } catch (error) {
    console.error('Error initializing Movie List:', error.message);
  }
}

module.exports = dashboardInit;
