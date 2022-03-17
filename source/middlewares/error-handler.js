const errorHandler = (error, req, res, next) => {
  const { message = 'Oops... Something went wrong', status = 500 } = error;
  return res.status(status).render('error', { message });
};

module.exports = errorHandler;
