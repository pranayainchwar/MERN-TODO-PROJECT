const express =require("express");
// or //import {express} from 'express';
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello");

})

app.listen(1000,()=>{
    console.log("Server Started")
});

