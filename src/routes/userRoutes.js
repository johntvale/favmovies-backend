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

router.post("/register", createUserController);
router.get("/search", auth, authorizationMiddleware(['admin']), getUsersController);
router.get("/search/:id", auth, authorizationMiddleware(['admin', 'user']), getUserController);
router.patch("/update/:id", auth, authorizationMiddleware(['admin', 'user']), updateUserController);
router.delete("/remove/:id", auth, authorizationMiddleware(['admin', 'user']), deleteUserController);

module.exports = router;