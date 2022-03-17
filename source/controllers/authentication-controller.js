const User = require('../models/user');
const withAsyncCatch = require('../utilities/with-async-catch');

const getSignUp = (req, res, next) => {
  return res.render('authentication/signup');
};

const getSignIn = (req, res, next) => {
  return res.render('authentication/signin');
};

const signUp = withAsyncCatch(async (req, res, next) => {});

const signIn = withAsyncCatch(async (req, res, next) => {});

module.exports = {
  getSignUp,
  getSignIn,
  signUp,
  signIn,
};
