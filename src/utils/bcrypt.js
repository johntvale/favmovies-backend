const { hashSync, compareSync } = require('bcrypt');

const encrypterPassword = (password) => {
  const saltRounds = 10;
  const hashedPassword = hashSync(password, saltRounds);
  return hashedPassword;
}

const comparerPassword = (password, hashedPassword) => {
  const isMatch = compareSync(password, hashedPassword);
  return isMatch;
}

module.exports = {
  encrypterPassword,
  comparerPassword
}