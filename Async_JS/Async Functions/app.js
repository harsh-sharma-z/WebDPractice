const sing=async()=>{
    return "Yare yare!"
}

sing().then((data)=>{
    console.log("Promise resolved with:", data);
})