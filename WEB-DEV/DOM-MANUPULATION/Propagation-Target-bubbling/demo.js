const div1=document.querySelector('.div1')
const div2=document.querySelector('.div2')

div1.addEventListener('click',()=>{
  console.log('div1')
},true
)
div2.addEventListener('click',()=>{
  console.log('div2')
},true
)
window.addEventListener('click',()=>{
  console.log('window ')
},true
)

const btn=document.querySelector('.btn').addEventListener('click', (e)=>{
    e.target.innerText='clicked'
})
