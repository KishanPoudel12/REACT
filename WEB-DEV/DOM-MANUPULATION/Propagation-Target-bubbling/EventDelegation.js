document.querySelector('#sports').addEventListener('click',(e)=>{
  console.log(e.target.getAttribute('id') + ' is clicked')
  e.target.style.backgroundColor='green'
})
const sports=document.querySelector('#sports')
const elem=document.createElement('li')
elem.innerText="kishan"
elem.setAttribute('id','kishan')
console.log(elem)
sports.appendChild(elem)
//event delegation also applies the property on future child 
