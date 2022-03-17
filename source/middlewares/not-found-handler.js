const ExpressError = require('../utilities/express-error');

const notFoundHandler = (req, res, next) => {
  const error = new ExpressError("Oops... We can't seem to find that", 404);
  return next(error);
};

module.exports = notFoundHandler;
