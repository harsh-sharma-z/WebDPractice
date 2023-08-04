const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const methodOverride = require('method-override')
// import express from "express";
// import path from "path";
// import mongoose from "mongoose";
const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/farmStand' , {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connection Open !')
})
.catch(err =>{
    console.log('Sorry, met an error! ');
    console.log(err);
})

app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

const categories = ['fruit' , 'vegetable' , 'dairy' , 'fungi'];

app.get('/products' , async(req , res) =>{
    const products = await Product.find({});
    console.log(products);
    res.render('products/index' , {products});
})

app.get('/products/new' , (req , res)=>{
    res.render('products/new' , {categories});
})

app.post('/products' , async (req , res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`products/${newProduct._id}`);
})

app.get('/products/:id' , async(req , res) =>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/show' , {product})
})


app.get('/products/:id/edit' , async(req , res)=>{
    const {id} = req.params;
    const editProduct = await Product.findById(id);
    res.render('products/edit' , {editProduct , categories});
})

app.put('/products/:id' , async(req , res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id , req.body , {runValidators: true , new : true})
    res.render('products/show' , {product})
})

app.delete('/products/:id' , async(req , res) =>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})


app.listen(3000 , ()=>{
    console.log("Connected at PORT 3000!")
})