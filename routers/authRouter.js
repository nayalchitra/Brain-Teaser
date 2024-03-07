const express = require('express');

const loginRouter = express.Router();
const signupRouter = express.Router();

const {loginHandler,signupHandler} = require('../controllers/authController.js');

loginRouter.post('/',loginHandler)
signupRouter.post('/',signupHandler);

module.exports = {loginRouter,signupRouter};