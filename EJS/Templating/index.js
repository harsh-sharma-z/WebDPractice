const express = require("express");
const path = require("path");
const app = express();

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , '/views'));

app.get('/' , (req , res) =>{
    res.render("home")
});

app.get('/rand' , (req , res) =>{
    res.render("random");
});



app.listen(7000 , () =>{
    console.log("Listening on port 7000");
})