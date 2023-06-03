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
// const lis=document.querySelectorAll('li');
// for(let li of lis){
//     li.addEventListener('click',function(){
//         this.remove();
//     });
// }

//event delegation
list.addEventListener('click',function(e){
    console.log("Click on UL"  )    ;
    e.target.nodeName==='LI' && e.target.remove();
});
