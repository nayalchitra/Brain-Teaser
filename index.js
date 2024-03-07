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
        let token = jwt.sign({username},"b94fbd385762615dd3eac7a195f800739dbdc07949673da5ef56f83b6c81265332c6b19a9e59acb399e1357aff9c06f4348e0aaa19908b5fb7d3f5440b668f87cabcaf5d4a9fc19fd2d80664f8311f081c39fb607d640321682c8d8b543c5a2af1549191c1f96a39466f55f946204818162cc47ebaa09c4da64b18306cff04cbf05eb00a1e4581cf6ddd1f457142bbb46e89bc9a6fd15ce915edb8844e6def3dab18fabd753cc94c7ad8e150391bc87c5acd3f1819718e140ea18f5af910e8f111b208e675d3d81c88eed3371c62ad12fa143aa49daf68f419bdb83af92d8716c0df81d4347f13104d8607f0c73473bba7bb873dd34528d118d702dc33e437d0");
        res.json({username, token,message:`user ${username} logged in successfully`})
    }
    else
        res.json({message:"invalid user"});
})

app.listen(process.env.PORT || PORT , ()=>{
    console.log("server started");
})