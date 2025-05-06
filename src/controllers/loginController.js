const { isValidLogin } = require("../joiValidators/loginValidation");
const { comparerPassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");
const { getUserByEmailService } = require("../services/userService");
const { NOT_FOUND, UNAUTHORIZED, BAD_REQUEST } = require("../utils/httpStatusCode");

const loginController = async (req, res, next) => {
  try {
    const loginPayload = {
      email: req.body.email,
      password: req.body.password,
    }
  
    const { error } = isValidLogin(loginPayload);
    if (error) {
      error.statusCode = BAD_REQUEST;
      return next(error);
    }

    const storedUser = await getUserByEmailService(loginPayload.email);
    if (!storedUser) {
      const error = new Error("User not found");
      error.statusCode = NOT_FOUND;
      return next(error);
    }

    const isValidPassword = comparerPassword(loginPayload.password, storedUser.password);
    if (!isValidPassword) {
      const error = new Error("Unauthorized: Invalid password");
      error.statusCode = UNAUTHORIZED;
      return next(error);
    }

    const token = generateToken({
      user: storedUser._id,
      role: storedUser.role
    });

    res.status(200).json({
      message: "Login successfully!",
      token
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  loginController,
};

