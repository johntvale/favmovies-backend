const express = require("express");
const router = express.Router();

const {
  createUserController,
  getUsersController,
  getUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/userController");

router.post("/", createUserController);
router.get("/", getUsersController);
router.get("/:id", getUserController);
router.delete("/:id", deleteUserController);
router.patch("/:id", updateUserController);

module.exports = router;