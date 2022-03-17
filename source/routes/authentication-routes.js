const express = require('express');
const authenticationController = require('../controllers/authentication-controller');

const router = new express.Router();

router.get('/signup', authenticationController.getSignUp);

router.get('/signin', authenticationController.getSignIn);

router.post('/signup', authenticationController.signUp);

router.post('/signin', authenticationController.signIn);

module.exports = router;
