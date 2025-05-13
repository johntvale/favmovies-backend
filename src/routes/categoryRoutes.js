const express = require("express");
const router = express.Router();
const { getCategoriesController, getCategoryByIdController, createCategoryController, updateCategoryController, deleteCategoryController } = require("../controllers/categoryController");
const auth = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware = require("../middlewares/authorizationMiddleware");

router.get("/", auth, authorizationMiddleware(["admin"]), getCategoriesController);
router.post("/", auth, authorizationMiddleware(["admin"]), createCategoryController);
router.get("/:id", auth, authorizationMiddleware(["admin"]), getCategoryByIdController);
router.patch("/:id", auth, authorizationMiddleware(["admin"]), updateCategoryController);
router.delete("/:id", auth, authorizationMiddleware(["admin"]), deleteCategoryController);

module.exports = router;