const express = require('express');
const quiz_data = require("./db/quiz_data");


const app = express();

const PORT = 3000;

app.get('/', (req,res)=>{
    res.send(quiz_data)
})

app.get('/quiz',(req,res)=>{
    res.send(quiz_data);
})



app.listen(process.env.PORT || PORT , ()=>{
    console.log("server started");
})