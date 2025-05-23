
const { encrypterPassword } = require('../utils/bcrypt');
const { createUserService } = require('../services/userService');
const { CONFLICT } = require('../utils/httpStatusCode');

const initUser = async () => {
  const newUser = {
    name: process.env.INIT_NAME,
    email: process.env.INIT_EMAIL,
    password: encrypterPassword(process.env.INIT_PASSWORD),
    role: process.env.INIT_ROLE,
  };

  try {
    await createUserService(newUser);
    console.log('InitialUser created successfully');
  } catch (error) {
    if (error.statusCode === CONFLICT) {
      console.log('InitialUser already exists');
    } else {
      console.error('Error creating InitialUser:', error.message);
    }
  }
}

module.exports = initUser;