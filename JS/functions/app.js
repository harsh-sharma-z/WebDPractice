// let table=parseInt(prompt("Enter a number to display multiplication table up it"));
// for(let i=1;i<=table;i++){
//     console.log(`Table of ${i}:`);
//     writeTable(i);
//     console.log("**********************")
// }
// function writeTable(table){
//     for(let i=1;i<=10;i++){
//         console.log(`${table} x ${i} = ${table*i}`);
//     }
// }



// const a=function(){
//     console.log("Hello");
//     alert("Hello");
// }

// const mymath={
//     PI:3.14,
//     square:function(num){
//         return num*num;
//     },
//     cube:function(num){
//         return num*num*num;
//     }
// }

// let a=mymath.square(2);

// function harsh(str)
// {
//     try{
//         console.log(str.toUpperCase().repeat(3));
//     }
//     catch(e){
//         console.log(e.message);
//         console.log("Error occured");
//     }
// }

// const arr=[1,2,3,4,5,6,7,8,9,10];
// arr.forEach(function(i){
//     console.log(i*2);
// });

//  const arr=[1,2,3,4,5,6,7,8,9,10];

//  const sqr=arr.map(function(i){
//         return i*i;
//     }
// );

// const sum=(x,y)=>{
//     return x*y;
// };
// if we use round brackets instead of curly braces then we can remove return keyword

// console.log(sum(2,3));

// const add=(a,b)=>a+b;

// const movies=[{name:"Naruto",rating:5},{name:"Boruto",rating:4},{name:"One Piece",rating:5},{name:"Death Note",rating:4},{name:"Attack on Titan",rating:5},{name:"Tokyo Ghoul",rating:4},{name:"Dragon Ball Z",rating:5},{name:"Dragon Ball Super",rating:4},{name:"Bleach",rating:5},{name:"My Hero Academia",rating:4}];
// const newMovies=movies.map(movie=>`${movie.name} - ${movie.rating}`);
// const goodMovies=movies.filter(m=>m.rating>4);

// const arr = [2, 3, 4, 5, 6, 7, 8, 6, 5, 6, 7];
// let a = arr.reduce((acc, curr) => {
//   return acc + curr;
// });

// let min=arr.reduce((min,curr)=>{
//     if(curr<min)
//     return curr;
//     return min;
// });



// const person={
//     firstName:"Harsh",
//     lastName:"Sharma",
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     shoutName:function(){
//         setTimeout(()=>{    
//             console.log(this.fullName());
//         }
//         ,3000);
//     }
// };



// const rollDie=(side=6)=>
// {
//     return Math.floor(Math.random()*side)+1;
// }


// let str="Harsh";
// console.log(...str);
// const arr=[...str];


//spread operator
// const dataForm={
//     username:"harsh",
//     email:"harsh@gmail.com",
//     age:20
// };

// const newUser={
//     ...dataForm,
//     id:1,
//     isAdmin:true
// };


//arguments object(not an array)
// function sum(){
//     let total=0;
//     for(let i of arguments)
//     total+=i;
//     return total;
// }

//rest operator(is an array)

// function sum(...nums){
//     return nums.reduce((acc,curr)=>acc+curr);
// }


//destructuring array
// const scores=[10,9,8,7,6,5,4,3,2,1];
// let first=scores[0];
// let second=scores[1];
// const [gold,silver,bronze,...rest]=scores;

//destructuring object
// const user={
//     email:"harsh@gmail.com",
//     password:"12345",
//     firstName:"Harsh",
//     lastName:"Sharma",
//     born:2003,
//     address:"India"
// }

// const {email:mail,password,...rest}=user; //names of variables should be same as keys of object


//destructuring params
// const user={
//     email:"harsh@gmail.com",
//     password:"12345",
//     firstName:"Harsh",
//     lastName:"Sharma",
//     born:2003,
//     address:"India"
// }

// function fullName({firstName,lastName}){
//     return `${firstName} ${lastName}`;
// }

// function fullName(user){
//     const {firstName,lastName}=user;
//     return `${firstName} ${lastName}`;
// }

// function fullName({firstName,lastName,born}){
//     return `${firstName} ${lastName} ${born}`;
// }

// movies=[
//     {
//         title:"Naruto",
//         score:5,
//         year:2002
//     },
//     {
//         title:"Boruto",
//         score:4,
//         year:2017
//     },
//     {
//         title:"One Piece",
//         score:5,
//         year:1999
//     },
//     {
//         title:"Death Note",
//         score:4,
//         year:2006
//     }
// ]

// movies.map(({title,score,year})=>console.log(`${title} - ${score} - ${year}`));


// const votes=['y','y','n','n','y','n','y'];
// const tally=votes.reduce((tally,votes)=>
// {
//     tally[votes]=(tally[votes]||0)+1;
//     return tally;
// },{});


// const  nums=[1,2,3,4,5,6,7,8];
// const odds=nums.filter(n=>{
//     return n%2===1;
// });