const express = require('express');

const loginRouter = express.Router();


const loginHandler = require('../controllers/authController.js');


loginRouter.post('/',loginHandler)

module.exports = loginRouter;