const fakeRequest=(url)=>{
    return new Promise((resolve,reject)=>{
        const rand=Math.random();
        setTimeout(()=>{
            if(rand>0.7)
        resolve("Data received");
        else
        reject("Oh no!! Error");
        },500)
    })
}

fakeRequest("abc.com")
.then((data)=>{
    console.log("It worked");
    console.log(data);
})
.catch((err)=>{
    console.log("Timeout");
    console.log(err);
})

