const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('thisismysecret'));

app.get('/greet' , (req , res) =>{
    const {name = 'Anonymous'} = req.cookies;
    res.send(`Hey there! ${name}`)
})

app.get('/setname' , (req , res) =>{
    res.cookie('name' , 'Harsh Sharma');
    res.cookie('animal' , 'Great Bengal Tiger')
    res.send('Okay sent you a cookie')
})

app.get('/getsignedcookie' , (req , res) =>{
    res.cookie('fruit' , 'devilfruit' , {signed : true})
    res.send("Okay signed your cookie")
})

app.get('/verifyfruit' , (req , res) =>{
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000 , ()=>{
    console.log("Serving on Port 3000! 🚀")
})