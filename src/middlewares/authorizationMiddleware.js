const { FORBIDDEN } = require("../utils/httpStatusCode");

const authorizationMiddleware = (allowedRoles) => (req, res, next) => {
  const user = req.user;

  if (!user || !allowedRoles.includes(user.role)) {
    return res.status(FORBIDDEN).json({ message: "Access denied" });
  }

  next();
}

module.exports = authorizationMiddleware;