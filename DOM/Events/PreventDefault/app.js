const form=document.querySelector('#shelterForm');
const name=document.querySelector('#name');
const list=document.querySelector('#list');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const newLi=document.createElement('li');
    newLi.innerHTML=name.value;
    list.appendChild(newLi);
    name.value='';
});