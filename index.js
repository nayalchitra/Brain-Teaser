const express = require('express');
const quiz_data = require("./db/quiz_data");
const cors = require('cors');
const quizRouter = require('./routers/quizRouter.js');
const userData = require('./db/users.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;


app.get('/', (req,res)=>{
    res.send("hi chitra")
})

// app.get('/quiz',(req,res)=>{
//     res.send(quiz_data.data);
// })

app.use('/quiz',quizRouter);

app.post('/login', (req,res)=>{
    const {username, password} = req.body;
    const isDataValid = userData.data.some((user)=>user.username === username && user.password === password);
    if(isDataValid){
        let token = jwt.sign({username},process.env.SECRET_KEY);
        res.json({username, token,message:`user ${username} logged in successfully`})
    }
    else
        res.json({message:"invalid user"});
})

app.listen(process.env.PORT || PORT , ()=>{
    console.log("server started");
})