import express from "express";
import {data} from "./db/quiz_data";

const app = express();

const PORT = 3000;

app.get('/', (req,res)=>{
    res.send('Hi Chitra')
})

// app.use('/', (req,res) =>{
//     res.send(data)
// })

app.listen(process.env.PORT || PORT , ()=>{
    console.log("server started");
})