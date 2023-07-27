const express = require('express');
const app = express();


app.get('/roll' , (req , res) =>{
    res.send('GET /roll');
} )


app.post('/roll' , (req , res) =>{
    res.send("POST /roll")
})

app.listen(3000 , () => {
    console.log("Started on PORT 3000!!")
})