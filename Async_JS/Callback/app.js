setTimeout(()=>
{
    document.body.style.backgroundColor='red';
    setTimeout(()=>{
        document.body.style.backgroundColor='yellow';
        setTimeout(()=>{
            document.body.style.backgroundColor='green';
        },1000)
    },1000)
},1000)

