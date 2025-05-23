const express = require("express");
const router = express.Router();
const {
  createMovieController,
  getMoviesController,
  getMovieController,
  updateMovieController,
  deleteMovieController,
  addOrUpdateViewController,
  addOrUpdateRatingMovieController
} = require("../controllers/movieController");
const auth = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware")

router.post("/register", auth, authorizationMiddleware(['admin']), createMovieController);
router.get("/search", auth, authorizationMiddleware(['admin', 'user']), getMoviesController);
router.get("/search/:id", auth, authorizationMiddleware(['admin', 'user']), getMovieController);
router.patch("/update/:id", auth, authorizationMiddleware(['admin']), updateMovieController);
router.delete("/remove/:id", auth, authorizationMiddleware(['admin']), deleteMovieController);
router.patch("/update/view/:id", auth, authorizationMiddleware(['user']), addOrUpdateViewController);
router.patch("/update/rating/:id", auth, authorizationMiddleware(['user']), addOrUpdateRatingMovieController);


module.exports = router;