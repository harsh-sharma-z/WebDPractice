const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) failure("Connection failed");
    else success(`Here is your data from ${url}`);
  }, delay);
};

const fakeRequestPromises = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) reject("Connection failed");
      else resolve(`Here is your data from ${url}`);
    }, delay);
  });
};

// fakeRequestCallback(
//   "books.com",
//   function (response) {
//     console.log("It worked!!!");
//     console.log(response);
//     fakeRequestCallback(
//         "books.com/page2",
//         function(response){
//             console.log("Worked again!")
//             console.log(response);
//             fakeRequestCallback(
//                 "books.com/page3",
//                 function(response)
//                 {
//                     console.log("Worked for the third time.")
//                     console.log(response);
//                 },
//                 function(err)
//                 {
//                     console.log("3rd error!", err);
//                 }
//             )
//         },
//         function(err){
//             console.log("Error, 2nd request",err);
//         }
//     )
//   },
//   function (err) {
//     console.log("Error!!", err);
//   }
// );

// fakeRequestPromises("google.com")
//     .then(()=>{
//         console.log("Promise resolved");
//         console.log("It worked!!");
//         fakeRequestPromises("google.com/page2")
//         .then(()=>{
//             console.log("Promise resolved(2)");
//             console.log("It worked");
//         })
//         .catch(()=>{
//             console.log("It didn't worked (2)");
//         })
//     })
//     .catch(()=>{
//         console.log("It didn't worked :(");
//     })

fakeRequestPromises("google.com")
.then((data) => {
    console.log("It worked for page 1");
    console.log(data);
    return fakeRequestPromises("google.com/page2");
})
.then((data)=>{
    console.log("It worked for the page 2");
    console.log(data);
    return fakeRequestPromises("google.com/page3");
})
.then((data)=>{
    console.log("It worked for page 3");
    console.log(data);
})
.catch((err)=>{
    console.log("One request failed :(")
    console.log(err);
})
