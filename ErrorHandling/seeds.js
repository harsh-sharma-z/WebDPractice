const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2' , {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connection Open !')
})
.catch(err =>{
    console.log('Sorry, met an error! ');
    console.log(err);
})


// const p =  new Product({
//     name: 'Mango',
//     price:'2.99',
//     category: 'fruit'
// })

// p.save()
// .then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// })

const seedProducts = [
    {
        name: 'Baingan',
        price: 3.99,
        category: 'vegetable'
    },
    {
        name:'Banana',
        price: 0.99,
        category: 'fruit'
    },
    {
        name: 'Tomato',
        price: 19.99,
        category:'vegetable'
    },
    {
        name: 'Paneer',
        price: 9.99,
        category: 'dairy'
    }
]

Product.deleteMany({})
.then((data)=>console.log(data));

Product.insertMany(seedProducts)
.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err)
})