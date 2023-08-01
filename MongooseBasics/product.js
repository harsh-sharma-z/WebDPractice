const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp' , {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connection Open !')
})
.catch(err =>{
    console.log('Sorry, met an error! ');
    console.log(err);
})


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price:{
        type: Number,
        required: true,
        min:0
    },
    onSale:{
        type: Boolean,
        required: true
    },
    categories: [String],
    qty:{
        online:{
            type: Number,
            default:0
        },
        inStore:{
            type: Number,
            default:0
        }
    },
    size:{
        enum:['S' , 'M' , 'L']
    }
});

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function(){
    return this.updateMany({} , {onSale: true , price:0})
}

const Product = mongoose.model('Product' , productSchema); 


const findProduct = async() =>{
    const foundProduct = await Product.findOne({name:'Bike Helmet'});
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    // await foundProduct.addCategory('Outdoors');
    // console.log(foundProduct)
}


Product.fireSale()
.then(res=>{
    console.log(res);
})


// findProduct();


// const bike = new Product({
//     name:'Bike Helmet' , 
//     price: 39.99 , 
//     onSale: true , 
//     categories:['cycling' , 'safety'],
//     size:'M'
// });
// bike.save()
//     .then(data =>{
//         console.log("It worked");
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log("Oh no! Error");
//         console.log(err);
//     })


// Product.findOne({name:'Bike Helmet'} , {price: 19.99} ,{size: 'M'}, {new : true , runValidators: true})
// .then(data =>{
//     console.log("It worked");
//     console.log(data);
// })
// .catch(err=>{
//     console.log("Oh no! Error");
//     console.log(err);
// })