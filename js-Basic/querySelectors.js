const dataAttElem=document.querySelector('[data-test]')
console.log(dataAttElem)

const divWithClasses =document.querySelectorAll('.div-class')
console.log(divWithClasses)

divWithClasses.forEach((div)=>div.style.color="green")

const textBoxSelector= document.querySelector("input[type='text']") //This is how to select a input type boxes 
console.log(textBoxSelector)