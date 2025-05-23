const express = require("express");
const router = express.Router();
const {
  addMovieToFavoriteListController,
  removeMovieFromFavoriteListController,
  addMovieToWatchedListController,
  addMovieToWatchLaterListController,
  removeMovieToWatchedListController,
  removeMovieFromWatchLaterListController,
} = require("../controllers/userMovieListController");
const auth = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware")

router.patch("/update/favorite/:id", auth, authorizationMiddleware(['user']), addMovieToFavoriteListController);
router.patch("/update/remove-favorite/:id", auth, authorizationMiddleware(['user']), removeMovieFromFavoriteListController);
router.patch("/update/watched/:id", auth, authorizationMiddleware(['user']), addMovieToWatchedListController);
router.patch("/update/remove-watched/:id", auth, authorizationMiddleware(['user']), removeMovieToWatchedListController);
router.patch("/update/watch-later/:id", auth, authorizationMiddleware(['user']), addMovieToWatchLaterListController);
router.patch("/update/remove-watch-later/:id", auth, authorizationMiddleware(['user']), removeMovieFromWatchLaterListController);

module.exports = router;