const express = require("express");
const router = express.Router();
const {
  createMovieController,
  getMoviesController,
  getMovieController,
  updateMovieController,
  deleteMovieController,
  markAsFavoriteMovieController,
  unmarkFavoriteMovieController,
  updateViewMovieController,
  ratingMovieController
} = require("../controllers/movieController");
const auth = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware")

router.post("/", auth, authorizationMiddleware(['admin']), createMovieController);
router.get("/", auth, authorizationMiddleware(['admin', 'user']), getMoviesController);
router.get("/:id", auth, authorizationMiddleware(['admin', 'user']), getMovieController);
router.patch("/:id", auth, authorizationMiddleware(['admin']), updateMovieController);
router.patch("/:id/favorite", auth, authorizationMiddleware(['user']), markAsFavoriteMovieController);
router.patch("/:id/unfavorite", auth, authorizationMiddleware(['user']), unmarkFavoriteMovieController);
router.patch("/:id/view", auth, authorizationMiddleware(['user']), updateViewMovieController);
router.patch("/:id/rating", auth, authorizationMiddleware(['user']), ratingMovieController);
router.delete("/:id", auth, authorizationMiddleware(['admin']), deleteMovieController);


module.exports = router;