const User = require("../models/userModel");
const CONFLICT = 409;
const INTERNAL_SERVER_ERROR = 500;

const createUserService = async (userData) => {
  const { email } = userData;

  const isNotUniqueEmail = await User.findOne({ email: email });

  if (isNotUniqueEmail) {
    const error = new Error("Email already exists");
    error.statusCode = CONFLICT;
    throw error;
  }

  const createdUser = await User.create(userData);
  if (!createdUser) {
    const error = new Error("User creation failed");
    error.statusCode = INTERNAL_SERVER_ERROR;
    throw error;
  }

  return createdUser;
}

const getUsersService = async () => {
  const users = await User.find();
  return users;
}

module.exports = {
  createUserService,
  getUsersService
}