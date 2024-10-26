// const element=document.createElement('h1')
// element.innerText='Kishan Poudel '
// document.body.appendChild(element)
// console.log(document.getElementById('div-id'))d
const hi =document.getElementById('div-id')
hi.style.color="red"
// hi.innerHTML="hi this is kishan "
// document.body.appendChild(hi)

// const me=document.getElementsByClassName('div-class')  //it has elements coz we can have multiple elements with same class 

// me[1].style.color="red" //Now doing this manually is not possible so how do we style each of the class here we are 

// const meArray =Array.from(me)          //Makes Array from something that is similar to array 

// meArray.forEach(div => div.style.color="green");  
 //uses for each but not complex ,each div from meArray comes and get the style and me Array was already converted to Array by using Array.from() funciton






 me=document.getElementsByClassName('div-class');

 const meArray=Array.from(me)

 meArray.forEach((div)=>div.style.color="green")