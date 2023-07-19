const express = require("express");
const app = express();

app.use((req , res)=>{
    console.log("We got a new request");
    res.send("Hello, we've got you! This is a response for the same.") 
})

app.listen(8000, ()=>{
    console.log("Listening on port 8000");
})
