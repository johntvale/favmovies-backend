const { UNAUTHORIZED, FORBIDDEN } = require("../utils/httpStatusCode");
const { verifyToken } = require("../utils/jwt");

const authenticationMiddleware = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(UNAUTHORIZED).json({ message: "User not logged in" });

  const decoded = verifyToken(token);
  if (decoded.err) return res.status(FORBIDDEN).json({ message: decoded });
  
  req.user = decoded;

  next();
}

module.exports = authenticationMiddleware;