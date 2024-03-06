const express = require('express');
const quiz_data = require("../db/quiz_data");
const quizRouter = express.Router();

quizRouter.use('/').get((req,res)=>{
    res.send(quiz_data.data);
})

module.exports = quizRouter;