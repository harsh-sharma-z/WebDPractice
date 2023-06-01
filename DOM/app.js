// const allImages=document.getElementsByTagName('img');
// for(let img of allImages)
// console.log(img.src);


// const squareImages=document.getElementsByClassName('square');
// for(let img of squareImages)
// console.log(img.src);

// const links=document.querySelectorAll('p a');
// for(let link of links)
// console.log(link.href);



// document.querySelector('p').innerText="lol"

// document.querySelector('h1').innerHTML="<i>Hello</i>"
// document.querySelector('h1').innerHTML+="<sup>sup</sup>"


// const firstLink=document.querySelector('a');

// firstLink.href="https://www.google.com";

// console.log(firstLink.getAttribute('id'));

// firstLink.setAttribute('href','https://www.google.com');

// const h1=document.querySelector('h1');
// h1.style.color="red";


// const allLinks=document.querySelectorAll('a');
// for(let link of allLinks)
// {
//     link.style.color="green";
//     link.style.textDecorationColor="magenta";
//     link.style.textDecorationStyle="wavy";
// }

// console.log(window.getComputedStyle(h1).color);
// console.log(window.getComputedStyle(h1).fontSize);


// const h2=document.querySelector('h2');
// h2.setAttribute('class','purple');
// let currentClasses=h2.getAttribute('class');
// h2.setAttribute('class',`${currentClasses} border`);        

// h2.classList.add('border','purple');
// h2.classList.add('purple');

// const bold=document.querySelector('b');
// const boldPapa=bold.parentElement;

// console.log(boldPapa);
// console.log(boldPapa.children);

const newImg=document.createElement('img');
newImg.src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg";
document.body.appendChild(newImg);
newImg.classList.add('square');

const newH3=document.createElement('h3');
newH3.innerText="I am new";
document.body.appendChild(newH3);