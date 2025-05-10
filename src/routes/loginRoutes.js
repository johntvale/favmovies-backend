const express = require("express");
const router = express.Router();
const { loginController } = require("../controllers/loginController");
const auth = require("../middlewares/authenticationMiddleware");

router.post("/login", loginController);
router.post("/logout", auth, loginController);

module.exports = router;