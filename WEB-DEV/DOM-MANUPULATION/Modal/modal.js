const openBtn=document.querySelector('#open-btn')
const modal=document.querySelector('#close-btn')
const modalContainer=document.querySelector('.modal-container')

openBtn.addEventListener('click',()=>{
  modalContainer.style.display='block'
})

modal.addEventListener('click',()=>{
  modalContainer.style.display='none'
})


document.addEventListener('click',()=>{
  modalContainer.style.display='none'
} ,true)
