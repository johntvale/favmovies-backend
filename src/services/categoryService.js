const Category = require('../models/categoryModel');
const { CONFLICT, INTERNAL_SERVER_ERROR, NOT_FOUND, BAD_REQUEST } = require('../utils/httpStatusCode');

const getAllCategoriesService = async () => {
  const categories = await Category.find().select('-__v');
  if (!categories) {
    const error = new Error("Categories not found");
    error.statusCode = 404;
    throw error;
  }
  const formattedCategories = categories.map(category => {
    return {
      id: category._id,
      name: category.name,
      createdAt: category.createdAt,
      updatedAt: category.updatedAt
    }
  });
  return formattedCategories;
}

const createCategoryService = async (categoryName) => {
  const isNotUniqueName = await Category.findOne({ name: categoryName.name });
  if (isNotUniqueName) {
    const error = new Error("Category name already exists");
    error.statusCode = CONFLICT;
    throw error;
  }

  const newCategory = await Category.create({ name: categoryName.name });
  if (!newCategory) {
    const error = new Error("Category creation failed");
    error.statusCode = INTERNAL_SERVER_ERROR;
    throw error;
  }
  const formattedCategory = {
    id: newCategory._id,
    name: newCategory.name,
    createdAt: newCategory.createdAt,
    updatedAt: newCategory.updatedAt
  }
  return formattedCategory;
}

const getCategoryByIdService = async (categoryId) => {
  const category = await Category.findById({ _id: categoryId }).select('-__v');
  if (!category) {
    const error = new Error("Category not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }
  const formattedCategory = {
    id: category._id,
    name: category.name,
    createdAt: category.createdAt,
    updatedAt: category.updatedAt
  }
  return formattedCategory;
}

const updateCategoryService = async (categoryId, categoryName) => {
  if (categoryId.length !== 24) {
    const error = new Error("Invalid category ID format");
    error.statusCode = BAD_REQUEST;
    throw error;
  }
  const isNotUniqueName = await Category.findOne({ name: categoryName });
  if (isNotUniqueName) {
    const error = new Error("Category name already exists");
    error.statusCode = CONFLICT;
    throw error;
  }

  const updatedCategory = await Category.findByIdAndUpdate(
    categoryId,
    { name: categoryName },
    { new: true }
  ).select('-__v');
  if (!updatedCategory) {
    const error = new Error("Category not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const formattedCategory = {
    id: updatedCategory._id,
    name: updatedCategory.name,
    createdAt: updatedCategory.createdAt,
    updatedAt: updatedCategory.updatedAt
  }
  return formattedCategory;
}

const deleteCategoryService = async (categoryId) => {
  if (categoryId.length !== 24) {
    const error = new Error("Invalid category ID format");
    error.statusCode = BAD_REQUEST;
    throw error;
  }
  const deletedCategory = await Category.findByIdAndDelete(categoryId);
  if (!deletedCategory) {
    const error = new Error("Category not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }
  const formattedCategory = {
    id: deletedCategory._id,
    name: deletedCategory.name,
    createdAt: deletedCategory.createdAt,
    updatedAt: deletedCategory.updatedAt
  }
  return formattedCategory;
}

module.exports = {
  getAllCategoriesService,
  createCategoryService,
  getCategoryByIdService,
  updateCategoryService,
  deleteCategoryService
}