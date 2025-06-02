const express = require("express");
const router = express.Router();
const { loginController, logOutController, loggedInController } = require("../controllers/loginController");
const auth = require("../middlewares/authenticationMiddleware");

router.post("/login", loginController);
router.post("/logout", auth, logOutController);
router.get("/me", auth, loggedInController);

module.exports = router;