const { isValidUser } = require("../validators/userValidation");
const { createUserService, getUsersService } = require("../services/userService");

const BAD_REQUEST = 400;

const createUserController = async (req, res, next) => {
  const userPayload = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  const { error } = isValidUser(userPayload);
  if (error) {
    error.statusCode = BAD_REQUEST;
    return next(error);
  }

  try {
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

module.exports = {
  createUserController,
  getUsersController
}