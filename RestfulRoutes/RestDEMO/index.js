const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')



app.use(methodOverride('_method'))
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) 
app.set('views' , path.join(__dirname , '/views'))
app.set('view engine' , 'ejs');



let comments = [
    {
        id : uuid(),
        username : "Harsh",
        comment : "LOL! That's really funny"
    },
    {
        id : uuid(),
        username : "Golu",
        comment : "Wiww"
    },
    {
        id : uuid(),
        username : "Dev",
        comment : "I'm a chhapri"
    },
    {
        id : uuid(),
        username : "Piggu",
        comment : "Heheheheheheh !"
    }
]

app.get("/comments" , (req , res) =>{
    res.render('comments/index' , {comments})
})

app.post("/comments" , (req , res)=>{
    const {username , comment} = req.body;
    comments.push({username , comment , id:uuid()})
    res.redirect("/comments")
})

app.get("/comments/new" , (req , res) =>{
    res.render("comments/new");
})


app.get("/comments/:id" , (req , res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    // if(comment === undefined)
    //     res.render("comments/notshow" , {id});
    // else
    res.render("comments/show" , {comment});
})

app.patch("/comments/:id" , (req , res) =>{
    const {id} = req.params;
    const newCommentText = req.body.comment;
    console.log(newCommentText)
    const foundComment = comments.find(c => c.id === id);
    // if(foundComment === undefined)
    //     res.render("comments/notshow" , {id});
    // else
    foundComment.comment = newCommentText;
    res.redirect("/comments")
})


app.get("/comments/:id/edit" , (req , res) =>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit" , {comment})
})

app.delete('/comments/:id' , (req , res)=>{
    const {id} = req.params;
    // const foundComment = comments.find(c => c.id === id);
    comments = comments.filter(c=> c.id !== id);
    res.redirect('/comments')
})

app.get('/roll' , (req , res) =>{
    res.send('GET /roll');
} )


app.post('/roll' , (req , res) =>{
    const {fill , qty} = req.body;
    res.send(`Hello, here are your ${qty} ${fill} roll.`)
})

app.listen(3000 , () => {
    console.log("Started on PORT 3000!!")
})


// GET/comments - list all comments
// POST/comments - create a new comments
// GET/comments/:id - get one comment (using ID)
// PATCH/comments/:id - update one comment
// DELETE/comments/:id - delete one comment 