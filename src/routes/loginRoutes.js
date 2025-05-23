const express = require("express");
const router = express.Router();
const { loginController, logOutController } = require("../controllers/loginController");
const auth = require("../middlewares/authenticationMiddleware");

router.post("/login", loginController);
router.post("/logout", auth, logOutController);

module.exports = router;