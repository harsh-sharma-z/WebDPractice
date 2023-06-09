// const sing=async()=>{
//     throw "Uh we have a problem";
//     return "Yare yare!"
// }

// sing()
//     .then((data)=>{
//         console.log("We have no problem!",data);
//     })
//     .catch((err)=>{
//         console.log("We have a problem :(",err);
//     });



const login= async (username,password)=>{
    if(!username || !password)
    throw "Missing credentials";
    if(password==="tatakae")
    return `Welcome ${username}!`
    throw "Wrong password";
}


login("harsh","tatakae")
.then(msg=>{
    console.log("Login Successful");
    console.log(msg)
})
.catch(err=>{
    console.log("Login unsuccessfull");
    console.log(err);
})