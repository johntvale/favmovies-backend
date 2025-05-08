const { UNAUTHORIZED, FORBIDDEN } = require("../utils/httpStatusCode");

const authenticationMiddleware = (req, res, next) => {
  const { token } = req.cookies.token;
  if (!token) return res.status(UNAUTHORIZED).json({ message: "User not logged in" });

  const decoded = verifyToken(token);
  if (decoded.err) return res.status(FORBIDDEN).json({ message: decoded.err.message });

  req.user = decoded;
  
  next();
}

module.exports = authenticationMiddleware;