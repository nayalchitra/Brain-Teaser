const express = require('express');
const quiz_data = require("../db/quiz_data");
const quizRouter = express.Router();


quizRouter.get('/quiz',(req,res)=>{
    res.send(quiz_data);
})