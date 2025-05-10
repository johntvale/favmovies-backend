const { isValidUser } = require("../joiValidators/userValidation");
const { encrypterPassword } = require("../utils/bcrypt");
const {
  createUserService,
  getUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} = require("../services/userService");
const { BAD_REQUEST, CREATED, OK, FORBIDDEN } = require("../utils/httpStatusCode");
const hasAccess = require("../utils/permissions");

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
    res.status(CREATED).json({
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
    res.status(OK).json({
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
    const authenticatedUser = req.user;
    if (userId.length !== 24) {
      const error = new Error("Invalid user ID format");
      error.statusCode = BAD_REQUEST;
      return next(error);
    }
    
    const user = await getUserByIdService(userId);

    if (authenticatedUser) {
      if (!hasAccess(authenticatedUser, user._id.toString())) {
        const error = new Error("Access denied");
        error.statusCode = FORBIDDEN;
        return next(error);
      }
    }

    res.status(OK).json({
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
    const authenticatedUser = req.user;
    
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

    const user = await getUserByIdService(userId);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = BAD_REQUEST;
      return next(error);
    }

    if (authenticatedUser) {
      if (!hasAccess(authenticatedUser, user._id.toString())) {
        const error = new Error("Access denied");
        error.statusCode = FORBIDDEN;
        return next(error);
      }
    }

    const updatedUser = await updateUserService(userPayload, userId);
    res.status(OK).json({
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
    const authenticatedUser = req.user;
    
    if (userId.length !== 24) {
      const error = new Error("Invalid user ID format");
      error.statusCode = BAD_REQUEST;
      return next(error);
    }

    const user = await getUserByIdService(userId);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = BAD_REQUEST;
      return next(error);
    }

    if (authenticatedUser) {
      if (!hasAccess(authenticatedUser, userId)) {
        const error = new Error("Access denied");
        error.statusCode = FORBIDDEN;
        return next(error);
      }
    }
    
    const deletedUser = await deleteUserService(userId);
    res.status(OK).json({
      message: "User deleted successfully",
      user: deletedUser
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