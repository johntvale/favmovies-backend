const formatMovie = (movie) => ({
  id: movie._id,
  title: movie.title,
  description: movie.description,
  category: movie.category,
  releaseDate: movie.releaseDate,
  director: movie.director,
  imageUrl: movie.imageUrl,
  cast: movie.cast,
  averageRating: movie.averageRating,
  favoriteCount: movie.favoriteCount,
  viewCount: movie.viewCount
});

module.exports = {
  formatMovie
};