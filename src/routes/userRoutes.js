const express = require("express");
const router = express.Router();

const {
  createUserController,
  getUsersController,
  getUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/userController");

const auth = require("../middlewares/authenticationMiddleware");
const roleMiddleware = require("../middlewares/")

router.post("/", createUserController);
router.get("/", auth, roleMiddleware('admin'), getUsersController);
router.get("/:id", auth, roleMiddleware('admin'), getUserController);
router.patch("/:id", auth, roleMiddleware('admin'), updateUserController);
router.delete("/:id", auth, roleMiddleware('admin'), deleteUserController);

module.exports = router;