const User = require("../models/userModel");
const {
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND
} = require("../utils/httpStatusCode");

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

  const result = {
    "message": "User created successfully",
    "user": returnedUser,
  }
  
  return result;
}

const insertManyUsersService = async (userList) => {
  const insertedUserList = await User.insertMany(userList);

  if (!insertedUserList || insertedUserList.length === 0) {
    const error = new Error("Users insertion failed");
    error.statusCode = INTERNAL_SERVER_ERROR;
    throw error;
  }

  const result = {
    "message": "Users inserted successfully",
    "users": insertedUserList
  };

  return result;
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

  const result = {
    "message": "Users retrieved successfully",
    "users": basicUserList,
  }

  return result;
}

const getByIdUserService = async (userId) => {
  const user = await User.findById(userId)
    .populate({
      path: 'favoriteList',
      select: '-ratings -favorite -view'
    })
    .populate({
      path: 'watchedList',
      select: '-ratings -favorite -view'
    })
    .populate({
      path: 'watchLaterList',
      select: '-ratings -favorite -view'
    }); 
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const result = {
    "message": "User retrieved successfully",
    "user": user
  }

  return result;
}

const getByEmailUserService = async (userEmail) => {
  const user = await User.findOne({ email: userEmail });
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const result = {
    "message": "User retrieved successfully",
    "user": user
  }

  return result;
}

const updateUserService = async (userData, userId) => {
  const user = await User.findById(userId);
  if (!user) {
    const error = new Error("User not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }

  if (userData.email) {
    const isNotUniqueEmail = await User.findOne({ email: userData.email });
    if (isNotUniqueEmail && isNotUniqueEmail._id?.toString() !== userId) {
      const error = new Error("Email already exists");
      error.statusCode = CONFLICT;
      throw error;
    }
  }

  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $set: userData },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedUser) {
    const error = new Error("User update failed");
    error.statusCode = INTERNAL_SERVER_ERROR;
    throw error;
  }

  const returnedUser = {
    id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    role: updatedUser.role,
  };

  const result = {
    "message": "User updated successfully",
    "user": returnedUser,
  }

  return result;
};

const deleteUserService = async (userId) => {
  const deleteUser = await User.findByIdAndDelete(userId);
  if (!deleteUser) {
    const error = new Error("User not found");
    error.statusCode = NOT_FOUND;
    throw error;
  }

  const deletedUser = {
    id: deletedUser._id,
    name: deletedUser.name,
    email: deletedUser.email,
  }

  const result = {
    "message": "User deleted successfully",
    "user": deletedUser,
  }

  return result;
}

module.exports = {
  createUserService,
  insertManyUsersService,
  getUsersService,
  getByIdUserService,
  getByEmailUserService,
  updateUserService,
  deleteUserService,
}