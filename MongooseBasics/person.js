const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp' , {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connection Open !')
})
.catch(err =>{
    console.log('Sorry, met an error! ');
    console.log(err);
});

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullname').get(function(){
    return `${this.first} ${this.last}`;
})

personSchema.pre('save' , async function(){
    console.log("About to save!");
})

personSchema.post('save' , async function(){
    console.log("Just saved!")
})

const Person = mongoose.model('Person' , personSchema);