const jokes = require('give-me-a-joke');
const colors = require('colors');
const figlet = require('figlet');
// const franc = require('franc');
// const langs = require('langs');
// const langs = import('langs');
// const franc = import('franc');

jokes.getRandomDadJoke(function(joke) {
    console.log(joke.rainbow);
});

figlet('Harsh' , function(err, data) {
    if(err){
        console.log('Something went wrong...');
        console.dir(err);
        return; 
    }
    console.log(data.rainbow)
});


// const langCode = franc('Alle menslike wesens word vry');
// const language = langs.where("3", langCode);
// console.log(language.name);