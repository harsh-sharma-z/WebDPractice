const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'));

app.use((req , res , next) =>{
    req.requestTime = Date.now();
    console.log(req.method , req.path);
    next();
})


// app.use((req , res , next) =>{
//     console.log("This is my first middleware!!")
//     next();
//     console.log("This is my first middleware after caalling next!")
// })

// app.use((req , res , next) =>{
//     console.log("This is my second middleware!!")
//     next();
// })


app.get('/' , (req , res) =>{
    console.log(`Date: ${req.requestTime()}`)
    res.send("HOME PAGE MIDDLEWARE")
})

app.get('/dogs' , (req , res) =>{
    res.send("WOOF WOOF")
})

app.listen(5000 , ()=>{
    console.log("Connection up at PORT 5000! 🚀")
})

