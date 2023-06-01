const btn=document.querySelector('#v2');
btn.ondblclick=function(){
    console.log('double click');
    alert('double click');
}

function scream(){
    console.log('ahhhhhhhhhhhhh');
    alert('ahhhhhhhhhhhhh');
}

// btn.onmouseenter=scream;

const btn3=document.querySelector('#v3');
btn3.addEventListener('mousedown',()=>{
    console.log('clicked');
});

btn3.addEventListener('mouseup',()=>{
    alert('clicked');
});


function twist(){
    console.log('twist');
}
function shout(){
    console.log('shout');
}


const tasButton=document.querySelector('#tas');
// tasButton.onclick=twist;
// tasButton.onclick=shout; //shout will be called


tasButton.addEventListener('click',twist,{once:true});
tasButton.addEventListener('click',shout); //both will be called