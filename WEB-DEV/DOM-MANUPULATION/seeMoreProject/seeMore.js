const revealbtn=document.querySelector('.reveal-btn')
const revealText=document.querySelector('.hidden-content')
// const container=document.querySelector('.container')

function revealContent(){
   revealText.classList.toggle('active')
}
revealbtn.addEventListener('click',revealContent);