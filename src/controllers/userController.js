const { isValidUser } = require("../joiValidators/userValidation");
const { encrypterPassword } = require("../utils/bcrypt");
const {
  createUserService,
  getUsersService,
  getUserService,
  updateUserService,
  deleteUserService,
} = require("../services/userService");

const BAD_REQUEST = 400;

const createUserController = async (req, res, next) => {
  try {
    const userPayload = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }
  
    const { error } = isValidUser(userPayload);
    if (error) {
      error.statusCode = BAD_REQUEST;
      return next(error);
    }
  
    userPayload.password = encrypterPassword(userPayload.password);

    const createdUser = await createUserService(userPayload);
    res.status(201).json({
      message: "User created successfully",
      user: createdUser
    });
  } catch (error) {
    next(error);
  }
}

const getUsersController = async (_req, res, next) => {
  try {
    const usersList = await getUsersService();
    res.status(200).json({
      message: "Users retrieved successfully",
      users: usersList
    });
  } catch (error) {
    next(error);
  }
}

const getUserController = async (req, res, next) => {
  try {
    const userId = req.params.id;
    
    if (userId.length !== 24) {
      const error = new Error("Invalid user ID format");
      error.statusCode = BAD_REQUEST;
      return next(error);
    }
    
    const user = await getUserService(userId);
    res.status(200).json({
      message: "User retrieved successfully",
      user: user
    });
  } catch (error) {
    next(error);
  }
}

const updateUserController = async (req, res, next) => {
  try {
    const userId = req.params.id;
    
    if (userId.length !== 24) {
      const error = new Error("Invalid user ID format");
      error.statusCode = BAD_REQUEST;
      return next(error);
    }
    
    const userPayload = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }
  
    const { error } = isValidUser(userPayload);
    if (error) {
      error.statusCode = BAD_REQUEST;
      return next(error);
    }
  
    userPayload.password = encrypterPassword(userPayload.password);

    const updatedUser = await updateUserService(userPayload, userId);
    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser
    });
  } catch (error) {
    next(error);
  }
}

const deleteUserController = async (req, res, next) => {
  try {
    const userId = req.params.id;
    
    if (userId.length !== 24) {
      const error = new Error("Invalid user ID format");
      error.statusCode = BAD_REQUEST;
      return next(error);
    }
    
    const user = await deleteUserService(userId);
    res.status(200).json({
      message: "User deleted successfully",
      user: user
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUserController,
  getUsersController,
  getUserController,
  deleteUserController,
  updateUserController
}