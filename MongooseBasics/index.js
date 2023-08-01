const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp' , {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Connection Open !')
})
.catch(err =>{
    console.log('Sorry, met an error! ');
    console.log(err);
})


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie' , movieSchema);

const yourName = new Movie({
    title: 'Your Name',
    year: 2016,
    score: 8.4,
    rating: 'TV-PG'
});


Movie.insertMany([
    { title: 'Attack on Titan', year: 2013 , score: 9.1 , rating: 'TV-MA'},
    { title: 'Death Note', year: 2006, score: 8.9, rating: 'TV-14'},
    { title: 'Vinland Saga', year: 2019, score: 8.8, rating: 'TV-MA'},
    { title: 'Demon Slayer', year: 2019, score: 8.7, rating: 'TV-14'},
    { title: 'Naruto', year:2002 , score:8.7 , rating: 'TV-PG'}
])
.then(data =>{
    console.log("It worked!");
    console.log(data)
})