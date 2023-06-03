const input=document.querySelector('input');

const h1=document.querySelector('h1');
input.addEventListener('change',function(e){
    console.log(e.target.value);
    h1.innerText=input.value;
}); 