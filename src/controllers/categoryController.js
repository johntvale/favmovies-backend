const { OK, CREATED, BAD_REQUEST } = require("../utils/httpStatusCode");
const { getAllCategoriesService } = require("../services/categoryService");
const { createCategoryService } = require("../services/categoryService");
const { getCategoryByIdService } = require("../services/categoryService");
const { updateCategoryService } = require("../services/categoryService");
const { deleteCategoryService } = require("../services/categoryService");
const { isValidCategory } = require("../joiValidators/categoryValidation");

const getCategoriesController = async (req, res, next) => {
  try {
    const categories = await getAllCategoriesService();
    res.status(OK).json({
      message: "Categories retrieved successfully",
      categories: categories
    });
  } catch (error) {
    next(error);
  }
}

const createCategoryController = async (req, res, next) => {
  const { name } = req.body;

  try {
    const isValidName = isValidCategory({ name: name});
    if (isValidName.error) {
      return res.status(BAD_REQUEST).json({
        message: "Invalid category name",
        error: isValidName.error.details[0].message
      });
    }

    const newCategory = await createCategoryService(name);
    res.status(CREATED).json({
      message: "Category created successfully",
      category: newCategory
    });
  } catch (error) {
    next(error);
  }
}

const getCategoryByIdController = async (req, res, next) => {
  const { id } = req.params;

  try {
    const isValidId = id.length === 24;
    if (!isValidId) {
      return res.status(BAD_REQUEST).json({
        message: "Invalid category ID format"
      });
    }

    const category = await getCategoryByIdService(id);
    res.status(OK).json({
      message: "Category retrieved successfully",
      category: category
    });
  } catch (error) {    
    next(error);
  }
}

const updateCategoryController = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const isValidId = id.length === 24;
    if (!isValidId) {
      return res.status(BAD_REQUEST).json({
        message: "Invalid category ID format"
      });
    }

    const isValidName = isValidCategory({ name: name});
    if (isValidName.error) {
      return res.status(BAD_REQUEST).json({
        message: "Invalid category name",
        error: isValidName.error.details[0].message
      });
    }

    const updatedCategory = await updateCategoryService(id, name);
    res.status(OK).json({
      message: "Category updated successfully",
      category: updatedCategory
    });
  } catch (error) {
    next(error);
  }
}

const deleteCategoryController = async (req, res, next) => {
  const { id } = req.params;

  try {
    const isValidId = id.length === 24;
    if (!isValidId) {
      return res.status(BAD_REQUEST).json({
        message: "Invalid category ID format"
      });
    }
    
    const deletedCategory = await deleteCategoryService(id);
    res.status(OK).json({
      message: "Category deleted successfully",
      category: deletedCategory
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getCategoriesController,
  createCategoryController,
  getCategoryByIdController,
  updateCategoryController,
  deleteCategoryController
}