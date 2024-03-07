const express = require('express');
const cors = require('cors');
const quizRouter = require('./routers/quizRouter.js');
const {routeNotFound} = require('./routers/notFoundRoute.js');
require('dotenv').config();
const {loginRouter,signupRouter,authVerify} = require('./routers/authRouter.js');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;


app.get('/', (req,res)=>{
    res.send("hi chitra")
})

app.use('/quiz',quizRouter);

app.use('/login', loginRouter)
app.use('/signup',signupRouter);
app.use(routeNotFound);

app.listen(process.env.PORT || PORT , ()=>{
    console.log("server started");
})