const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Welcome to the tutrial");
})

app.listen(3000 ,()=> console.log("Active on port 3000") );