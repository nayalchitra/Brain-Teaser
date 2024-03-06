const express = require('express');
const quiz_data = require("./db/quiz_data");
const cors = require('cors');
const quizRouter = require('./routers/quizRouter.js');
const app = express();
app.use(cors());

const PORT = 3000;


app.get('/', (req,res)=>{
    res.send("hi chitra")
})

// app.get('/quiz',(req,res)=>{
//     res.send(quiz_data.data);
// })

app.use('/quiz',quizRouter);



app.listen(process.env.PORT || PORT , ()=>{
    console.log("server started");
})