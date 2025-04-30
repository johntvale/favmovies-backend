const express = require("express");
const router = express.Router();

const { createUserController, getUsersController} = require("../controllers/userController");

router.post("/", createUserController);
router.get("/", getUsersController);

module.exports = router;