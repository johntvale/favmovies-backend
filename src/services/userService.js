const User = require("../models/userModel");
const { CONFLICT, INTERNAL_SERVER_ERROR, NOT_FOUND } = require("../utils/httpStatusCode");

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

  const returnedUser = {
    id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
  }
  
  return returnedUser;
}

const getUsersService = async () => {
  const users = await User.find();
  const basicUserList = users.map(user => {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    }
  })

  return basicUserList;
}

const getUserByIdService = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }

  return user;
}

const getUserByEmailService = async (userEmail) => {
  const user = await User.findOne({ email: userEmail });
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }

  return user;
}

const updateUserService = async (userData, userId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }
  
  const isNotUniqueEmail = await User.findOne({ email: userData.email });

  if (isNotUniqueEmail && isNotUniqueEmail._id.toString() !== userId) {
    const error = new Error("Email already exists");
    error.statusCode = CONFLICT;
    throw error;
  }

  const updatedUser = await User.findByIdAndUpdate(userId, userData, {
    new: true,
    runValidators: true,
  });

  if (!updatedUser) {
    const error = new Error("User update failed");
    error.statusCode = INTERNAL_SERVER_ERROR;
    throw error;
  }

  const returnedUser = {
    id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
  }

  return returnedUser;
}

const deleteUserService = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  if (!deletedUser) {
    const error = new Error("User not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const deletedUserData = {
    id: deletedUser._id,
    name: deletedUser.name,
    email: deletedUser.email,
  }

  return deletedUserData;
}

module.exports = {
  createUserService,
  getUsersService,
  getUserByIdService,
  getUserByEmailService,
  updateUserService,
  deleteUserService,
}