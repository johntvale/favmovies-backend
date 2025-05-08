const { FORBIDDEN } = require("../utils/httpStatusCode");

const authorizationMiddleware = (requiredRole) = (req, res, next) => {
  const user = req.user;

  if (!user || (user.role !== requiredRole)) {
    return res.status(FORBIDDEN).json({ message: "Access denied"});
  }

  next()
}

module.exports = authorizationMiddleware;