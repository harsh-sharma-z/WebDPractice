document.querySelector('button').addEventListener('click', function(event) {
    alert("Clicked");
});

const input=document.querySelector('input');

// input.addEventListener('keydown',function(e){
//     console.log(e.key);
//     console.log(e.code);
// });

// input.addEventListener('keyup',function(){
//     console.log("Key Up");
// }   );

window.addEventListener('keydown',function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("UP");
            break;
        case 'ArrowDown':
            console.log("DOWN");
            break;
        case 'ArrowLeft':
            console.log("LEFT");
            break;
        case 'ArrowRight':
            console.log("RIGHT");
            break;
    
}
});