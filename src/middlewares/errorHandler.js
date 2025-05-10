const { INTERNAL_SERVER_ERROR } = require("../utils/httpStatusCode");

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, next) => {
  const statusCode = err.statusCode || INTERNAL_SERVER_ERROR;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message
  });
};

module.exports = errorHandler;