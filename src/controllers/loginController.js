const { isValidLogin } = require("../joiValidators/loginValidation");
const { comparerPassword } = require("../utils/bcrypt");
const { generateToken, verifyToken } = require("../utils/jwt");
const { getByEmailUserService, getByIdUserService } = require("../services/userService");
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

const loggedInController = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      const error = new Error("Unauthorized: No token provided");
      error.statusCode = UNAUTHORIZED;
      return next(error);
    }
    const decodedUser = verifyToken(token);
    if (!decodedUser) {
      const error = new Error("Unauthorized: Invalid token");
      error.statusCode = UNAUTHORIZED;
      return next(error);
    }

    const userLoggedIn = await getByIdUserService(decodedUser.id);
    if (!userLoggedIn.user) {
      const error = new Error("User not found");
      error.statusCode = NOT_FOUND;
      return next(error);
    }

    res.status(200).json({
      message: "User logged in successfully!",
      user: {
        id: userLoggedIn.user._id,
        name: userLoggedIn.user.name,
        email: userLoggedIn.user.email,
        role: userLoggedIn.user.role
      }
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  loginController,
  logOutController,
  loggedInController
};