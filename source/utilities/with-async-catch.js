const withAsyncCatch = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((error) => {
      return next(error);
    });
  };
};

module.exports = withAsyncCatch;
