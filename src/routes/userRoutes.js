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
const authorizationMiddleware = require("../middlewares/authorizationMiddleware")

router.post("/", createUserController);
router.get("/", auth, authorizationMiddleware(['admin']), getUsersController);
router.get("/:id", auth, authorizationMiddleware(['admin', 'user']), getUserController);
router.patch("/:id", auth, authorizationMiddleware(['admin', 'user']), updateUserController);
router.delete("/:id", auth, authorizationMiddleware(['admin', 'user']), deleteUserController);

module.exports = router;