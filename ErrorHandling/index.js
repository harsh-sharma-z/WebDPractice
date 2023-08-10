const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const methodOverride = require("method-override");
const AppError = require("./AppError");
// import express from "express";
// import path from "path";
// import mongoose from "mongoose";
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open !");
  })
  .catch((err) => {
    console.log("Sorry, met an error! ");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy", "fungi"];


function wrapAsync(fn){
    return function(req , res , next) {
        fn(req , res , next).catch(e => next(e));
    }
}

app.get("/products", wrapAsync(async (req, res , next) => {
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category });
      res.render("products/index", { products, category });
    } else {
      const products = await Product.find({});
      res.render("products/index", { products, category: "All" });
    }
}));

app.get("/products/new", (req, res) => {
  // throw new AppError('Not Allowed' , 401);
  res.render("products/new", { categories });
});

app.post("/products", wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`products/${newProduct._id}`);
}));

app.get("/products/:id", wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new AppError("Product was not found", 404);
    }
    res.render("products/show", { product });

}));

app.get("/products/:id/edit", wrapAsync(async (req, res) => {
  
    const { id } = req.params;
    const editProduct = await Product.findById(id);
    res.render("products/edit", { editProduct, categories });
  
}));

app.put("/products/:id", wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.render("products/show", { product });
}));

app.delete("/products/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/products");
}));

const handleValidationError = err =>{
    console.dir(err)
    return new AppError(`Validation error....  ${err.message}` , 400);
}

app.use((err , req , res , next) =>{
    console.log(err.name);
    if(err.name === 'ValidationError') err = handleValidationError(err)
    next(err);
})

app.use((err, req, res, next) => {
  const { status = 500, message = "Oops, something went wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Connected at PORT 3000!");
});
