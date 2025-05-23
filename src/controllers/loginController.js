const { isValidLogin } = require("../joiValidators/loginValidation");
const { comparerPassword } = require("../utils/bcrypt");
const { generateToken } = require("../utils/jwt");
const { getByEmailUserService } = require("../services/userService");
const { NOT_FOUND, UNAUTHORIZED, BAD_REQUEST } = require("../utils/httpStatusCode");
const FIFTEEN_MINUTES = 15 * 60 * 1000;

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

    const storedUser = await getByEmailUserService(loginPayload.email);
    if (!storedUser.user) {
      const error = new Error("User not found");
      error.statusCode = NOT_FOUND;
      return next(error);
    }

    const isMatchingPasswords = comparerPassword(loginPayload.password, storedUser.user.password);
    if (!isMatchingPasswords) {
      const error = new Error("Unauthorized: Invalid password");
      error.statusCode = UNAUTHORIZED;
      return next(error);
    }
    
    const token = generateToken({
      id: storedUser.user._id,
      name: storedUser.user.name,
      email: storedUser.user.email,
      role: storedUser.user.role
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: FIFTEEN_MINUTES,
    }).status(200).json({
      message: "Login successfully!",
    });
  } catch (error) {
    next(error);
  }
}

const logOutController = async (_req, res, next) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "Logout successfully!",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  loginController,
  logOutController
};