
const User = require('../models/userModel');
const { encrypterPassword } = require('../utils/bcrypt');

const initUser = async () => {
  const newUser = {
    name: process.env.INIT_NAME,
    email: process.env.INIT_EMAIL,
    password: encrypterPassword(process.env.INIT_PASSWORD),
    role: process.env.INIT_ROLE,
  };

  const existInitialUser = await User.findOne({ email: newUser.email });

  if (!existInitialUser) {
    await User.create(newUser);
    console.log('InitialUser created successfully');
  } else {
    console.log('InitialUser already exists');
  }
}

module.exports = initUser;