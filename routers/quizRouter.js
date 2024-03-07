const express = require('express');
const quiz_data = require("../db/quiz_data");
const quizRouter = express.Router();
const {authVerify} = require('../controllers/authController')

quizRouter.get('/', authVerify,(req,res)=>{
    res.json(quiz_data.data);
})

module.exports = quizRouter;