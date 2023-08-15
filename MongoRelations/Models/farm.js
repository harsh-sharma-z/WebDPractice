const mongoose = require("mongoose");
const schema = mongoose.Schema;
mongoose
  .connect("mongodb://127.0.0.1:27017/relationshipDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connection Open !🚀");
  })
  .catch((err) => {
    console.log("Sorry, met an error! ⚠️");
    console.log(err);
  });

const productSchema = new schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Spring", "Summer", "Fall", "Winter"],
  },
});

const farmSchema = new schema({
    name: String,
    city: String,
    products: [ {type: schema.Types.ObjectId , ref: 'Product'} ]
})


const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm" , farmSchema);

// Product.insertMany([
//   {
//     name: "Goddess Melon",
//     price: 4.99,
//     season: "Summer",
//   },
//   {
//     name: "Avacado",
//     price: 3.99,
//     season: "Spring",
//   },
//   {
//     name: "Sugar Watermelon",
//     price: 5.99,
//     season: "Summer",
//   },
// ]);


// const makeFarm = async()=>{
//     const farm = new Farm(
//         {
//             name: 'Full Belly Farms',
//             city: 'Guinda, CA'
//         }
//     );
//     const melon = await Product.findOne({name: 'Goddess Melon'});
//     farm.products.push(melon);
//     await farm.save()
//     console.log(farm)
// }

// makeFarm();

const addProduct = async() =>{
    const farm = await Farm.findOne({name: 'Full Belly Farms'})
    const watermelon = await Product.findOne({name: 'Sugar Watermelon'});
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm)
}

// addProduct();


const populateProducts = async() =>{
    const farm = await Farm.findOne({name: 'Full Belly Farms'})
    await farm.populate('products')
    await farm.save();
    console.log(farm)
}

populateProducts();