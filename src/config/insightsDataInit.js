const User = require("../models/userModel");
const Movie = require("../models/movieModel");

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

async function populateMovieAndUserData() {
  const users = await User.find();
  const movies = await Movie.find();

  const nonAdminUsers = users.filter(user => user.role !== 'admin');
  const userIds = nonAdminUsers.map(user => user._id);
  const movieIds = movies.map(movie => movie._id);

  // Quantidades fixas
  const totalMovies = movies.length;
  const viewCountTarget = Math.floor(totalMovies * 0.9);
  const favoriteCountTarget = Math.floor(totalMovies * 0.8);
  const ratingCountTarget = Math.floor(totalMovies * 0.8);

  const shuffledMovies = shuffle([...movies]);

  const moviesWithView = shuffledMovies.slice(0, viewCountTarget);
  const moviesWithFavorite = shuffledMovies.slice(0, favoriteCountTarget);
  const moviesWithRating = shuffledMovies.slice(0, ratingCountTarget);

  // Atualiza dados nos filmes
  for (const movie of movies) {
    const views = [];
    const favorites = [];
    const ratings = [];

    // Visualizações
    if (moviesWithView.includes(movie)) {
      const viewUsers = shuffle([...userIds]).slice(0, getRandomInt(3, userIds.length));
      for (const userId of viewUsers) {
        views.push({
          user: userId,
          view: getRandomInt(1, 5),
        });
      }
    }

    movie.view = views;
    movie.viewCount = views.reduce((sum, v) => sum + v.view, 0);

    // Favoritos
    if (moviesWithFavorite.includes(movie)) {
      const favUsers = shuffle([...userIds]).slice(0, getRandomInt(3, 10));
      for (const userId of favUsers) {
        favorites.push({ user: userId, favorite: true });
      }
    }

    movie.favorite = favorites;
    movie.favoriteCount = favorites.length;

    // Avaliações
    if (moviesWithRating.includes(movie)) {
      const rateUsers = shuffle([...userIds]).slice(0, getRandomInt(3, 10));
      for (const userId of rateUsers) {
        const score = getRandomInt(1, 5);
        ratings.push({ user: userId, score });
      }
    }

    movie.ratings = ratings;
    movie.averageRating = ratings.length
      ? (ratings.reduce((sum, r) => sum + r.score, 0) / ratings.length).toFixed(1)
      : 0;

    await movie.save();
  }

  // Atualiza listas dos usuários
  for (const user of nonAdminUsers) {
    const shuffled = shuffle([...movieIds]);

    const watchedCount = getRandomInt(3, 8);
    const favoriteCount = getRandomInt(2, 6);
    const watchLaterCount = getRandomInt(2, 5);

    const watchedList = shuffled.slice(0, watchedCount);
    const favoriteList = shuffled.slice(watchedCount, watchedCount + favoriteCount);
    const watchLaterList = shuffled.slice(watchedCount + favoriteCount, watchedCount + favoriteCount + watchLaterCount);

    user.watchedList = watchedList;
    user.favoriteList = favoriteList;
    user.watchLaterList = watchLaterList;

    await user.save();
  }
}

const insightsDataInit = async () => {
  try {
    await populateMovieAndUserData();
    console.log('Dashboard inicializado com sucesso');
  } catch (error) {
    console.error('Erro ao inicializar o Dashboard:', error.message);
  }
};

module.exports = insightsDataInit;
