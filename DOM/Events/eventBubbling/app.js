const button=document.querySelector('#changecolor');
const container=document.querySelector('#container');


button.addEventListener('click',function(e){
    const newColor=makeRandColor();
    container.style.backgroundColor=newColor;
    e.stopPropagation(); //to stop at this bubble
});

container.addEventListener('click',function(e){
    container.classList.toggle('hide');
});

const makeRandColor=()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}

