// Custom error handler middleware
function errorHandler(err, req, res, next) {
  console.error(err.stack); // Log the error stack trace for debugging

  // Set the default error response
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';

  // Handle specific known errors
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors).map((val) => val.message).join(', ');
  }

  if (err.name === 'CastError') {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  }

  res.status(statusCode).json({
    success: false,
    error: message,
  });
}

module.exports = errorHandler;
