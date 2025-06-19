const User = require('../models/userModel');
const { insertManyUsersService } = require('../services/userService');
const userList = require('./userList');

const userListInit = async () => {
  try {
    const isDatabasePopulated = await User.countDocuments() > 0;
    if (isDatabasePopulated) {
      return console.log('User list already initialized');
    }

    const result = await insertManyUsersService(userList);
    if (result && result.users.length > 0) {
      console.log('User list initialized successfully');
    }
  } catch (error) {
    console.error('Error initializing User List:', error.message);
  }
}

module.exports = userListInit;