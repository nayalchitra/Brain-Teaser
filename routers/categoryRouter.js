const express = require('express');
const quiz_data = require("../db/quiz_data");
const catgoryRouter = express.Router();
const {authVerify} = require('../controllers/authController')

catgoryRouter.get('/', (req,res)=>{
    res.json(quiz_data.data);
})

module.exports = catgoryRouter;