const express = require("express");
const app = express();

// app.use((req , res)=>{
//     console.log("We got a new request");
//     res.send("Hello, we've got you! This is a response for the same.") 
// })

app.post("/cats" , (req , res)=>{
    res.send("This is a post request for /cats.")
})

app.get("/search" , (req , res) =>{
    const {q} = req.query;
    if(!q){
        res.send("Nothing to be searched!")
    }
    res.send(`<h1>Here are the search results for '${q}'</h1>`);
})

app.get("/r/:subreddit" , (req , res) =>{   // will match any string that matches the format
    const { subreddit } = req.params;
    res.send(`<h1>We are browsing ${subreddit} subreddit!</h1>`);
})

app.get("/r/:subreddit/:postID" , (req , res) =>{   // will match any string that matches the format
    const { subreddit , postID } = req.params;
    res.send(`<h1>We are browsing '${subreddit}' subreddit, with the postID = '${postID}'!</h1>`);
})
app.get("/" , (req , res)=>{
    res.send('Welcome! to the home page.')
})
app.get("/cats" , (req,res)=>{
    res.send("Meow!");
})

app.get("/dogs" , (req , res)=>{
    res.send("Woof!");
})

app.get('*' , (req , res)=>{
    res.send("Sorry, I don't know that route!");
})

app.listen(8000, ()=>{
    console.log("Listening on port 8000");
})
