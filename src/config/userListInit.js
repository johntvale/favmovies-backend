const { insertManyUsersService } = require('../services/userService');
const userList = require('./userList');

const userListInit = async () => {
  try {
    await insertManyUsersService(userList);
    console.log('User list initialized successfully');
  } catch (error) {
    console.error('Error initializing User List:', error.message);
  }
}

module.exports = userListInit;