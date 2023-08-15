const mongoose = require('mongoose');

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

  const userSchema = new mongoose.Schema({
    first: String, 
    last : String,
    addresses: [
        {
            // _id : {id: false},
            street: String,
            city: String,
            state: String,
            country: String,
        }
    ]
  })

  const User = mongoose.model('User' , userSchema)

  const makeUser = async() =>{
    const u = new User({
      first: "Harsh",
      last: "Sharma"
    })
    u.addresses.push({
      street: "Raj Vihar",
      city: "Mathura",
      country: "India"
    })
    const res = await u.save();
    console.log(res);
  }

  const addAddress = async(id) =>{
    const user = await User.findById(id);
    user.addresses.push({
      street: "GLA University",
      city: "Mathura",
      country: "India"
    })

    const res = await user.save();
    console.log(res)
  }

  // makeUser();
  addAddress("64d9990c519d385fe3556b07");