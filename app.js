const express = require('express');
const app = express();
const prototype = 5000;
// Set up middleware for parsing JSON request bodies

app.get("/",(req,res)=>{
    res.send("Hello World!");
})

app.listen(prototype, ()=>{
    console.log(`Server is running on port ${prototype}`);
})