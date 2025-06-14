const express = require("express");
const router = express.Router();
const { getInsightsController } = require("../controllers/insightsController");
const auth = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");

router.get("/dashboard", auth, authorizationMiddleware(['admin']), getInsightsController);

module.exports = router;