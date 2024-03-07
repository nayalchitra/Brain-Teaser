const express = require('express');
const userData = require('../db/users');
const jwt = require('jsonwebtoken');

const loginHandler = (req,res)=>{
    const {username, password} = req.body;
    const isDataValid = userData.data.some((user)=>user.username === username && user.password === password);
    if(isDataValid){
        let token = jwt.sign({username},process.env.SECRET_KEY);
        res.json({username, token,message:`user ${username} logged in successfully`})
    }
    else
        res.json({message:"invalid user"});
}

module.exports = loginHandler;