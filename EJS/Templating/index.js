const express = require("express");
const path = require("path");
const app = express();
const redditData = require('./data.json');
// console.log(redditData);

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , '/views'));

app.get('/' , (req , res) =>{
    res.render("home")
});

app.get('/naruto' , (req , res) =>{
    const narutosCharacters = ['Naruto' , 'Sasuke' , 'Sakura' , 'Sai' , 'Kakashi'];
    res.render('naruto' , {narutosCharacters});
})

app.get('/r/:subreddit' , (req , res)=>{
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    console.log(data);
    if(data)
        res.render("subreddit" , { ...data });
    else
        res.render("notfound" , {subreddit});
});

app.get('/rand' , (req , res) =>{
    let num =  Math.floor(Math.random()*10) + 1 ;
    res.render("random" , {randNum : num});
});

app.listen(7000 , () =>{
    console.log("Listening on port 7000");
})