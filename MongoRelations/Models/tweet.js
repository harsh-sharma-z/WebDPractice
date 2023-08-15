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

const userSchema = new schema({
    username : String,
    age : Number
});

const tweetSchema  = new schema({
    text: String,
    likes: Number,
    user: {type: schema.Types.ObjectId , ref : 'User'}
})

const User = mongoose.model('User' , userSchema);
const Tweet = mongoose.model('Tweet' , tweetSchema);

// const makeTweets = async() => {
//   // const user = new User({
//   //   username: 'harsh',
//   //   age: 21
//   // })

//   const user = await User.findOne({username:'harsh'})
//   const tweet2 = new Tweet({
//     text: 'May this tweet get a lot of likes 😗',
//     likes: 7891
//   })

//   tweet2.user = user;
//   // user.save();
//   tweet2.save();
// }


// makeTweets();


const findTweet = async() =>{
  const t = await Tweet.find({}).populate('user' );
  console.log(t);
}
findTweet();