const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req , res , next) =>{
    req.requestTime = Date.now();
    console.log(req.method , req.path);
    next();
})

app.use('/dogs' , (req , res , next) =>{
    console.log("I like dogs");
    next();
})

const verifyPassword = (req , res , next) =>{
    const {password} = req.query;
    if(password === 'harsh'){
        next();
    }
    res.send('You need a password')
}

// app.use((req , res , next) =>{
//     console.log("This is my first middleware!!")
//     next();
//     console.log("This is my first middleware after caalling next!")
// })

// app.use((req , res , next) =>{
//     console.log("This is my second middleware!!")
//     next();
// })

app.get('/secret'  , verifyPassword ,  (req , res) =>{
    res.send("I have no enemies🕊️")
}) 

app.get('/' , (req , res) =>{
    console.log(`Date: ${req.requestTime}`)
    res.send("HOME PAGE MIDDLEWARE")
})

app.get('/dogs' , (req , res) =>{
    res.send("WOOF WOOF")
})

app.use((req , res) =>{
    res.status(404).send("Not found :(")
})



app.listen(5000 , ()=>{
    console.log("Connection up at PORT 5000! 🚀")
})

