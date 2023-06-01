let command=prompt("What would you like to do?");
let todos=[];
command.toLowerCase();
while(command!=="exit")
{
    if(command==="new")
    {
        let input=prompt("Okay! what's the new task?");
        todos.push(input);
    }
    else if(command==="list")
    {
        console.log("**********");
        for (let i=0;i<todos.length;i++)
        console.log(`${i}: ${todos[i]}`);
        console.log("**********");
    }
    else if(command==="delete")
    {
        let index=prompt("Enter index of task to delete");
        if(!Number.isNan(index))
        todos.splice(index,1);
        else
        console.log("Unknown index");
    }
    command=prompt("What would you like to do?");
}