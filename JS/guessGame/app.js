let max=parseInt(prompt("Enter the maximum number!"));
if(!max){
    max=parseInt(prompt("Enter a valid number!"));
}
const target=Math.floor(Math.random()*max) + 1;
let input=parseInt(prompt("Enter your first guess!"));
let attempts=1;
while(parseInt(input)!==target){
    attempts++;
    if(input>target)
    input=parseInt(prompt("Too high! Enter your next guess!"));
    else
    input=parseInt(prompt("Too low! Enter your next guess!")); 
}
console.log(`You got it! It took you ${attempts} guesses!`);