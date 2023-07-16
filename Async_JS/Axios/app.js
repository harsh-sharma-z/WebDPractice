// axios.get("https://swapi.dev/api/people/1/")
// .then(data=>{
//     console.log("Response:",data);
// })
// .catch(e=>{
//     console.log("Error!",e);
// })




// const getPeople=async(id)=>{
//     try{
//         const res=await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//     }
//     catch(e){
//         console.log("Error!!",e);
//     }
// };

// getPeople(5);
// getPeople(10);

const jokes=document.querySelector('#jokes')
const button=document.querySelector('button');
const addNewJoke=async ()=>{
    const jokeText=await getDadJoke();
    const newLI=document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
}
const getDadJoke=async()=>{
    try{
        const config={headers:{Accept:'application/json'}};
        const res=await axios.get("https://icanhazdadjoke.com/",config);
        return res.data.joke; 
    }
    catch(e){
        return "No jokes available, Sorry :("
    }
}
button.addEventListener('click',addNewJoke);