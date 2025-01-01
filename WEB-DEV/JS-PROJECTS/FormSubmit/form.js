const submit=document.querySelector('.submit')
const form=document.querySelector('.form')
const hide=document.querySelector('.hide')

submit.addEventListener('click',()=>{
  form.classList.add('show');
})
hide.addEventListener('click',()=>{
   form.classList.remove('show')
 })

