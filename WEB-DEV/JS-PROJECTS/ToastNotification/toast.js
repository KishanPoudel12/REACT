const success=document.querySelector('.success')
const error=document.querySelector('.error')
const invalid=document.querySelector('.invalid')
const notification=document.querySelector('.notification')

function  showToast(message){
  const notification=document.createElement('div')
  document.querySelector('.container').append(notification)
  notification.innerHTML=message
  notification.classList.add('show')
  setTimeout(()=>{
    notification.classList.remove('show')
    notification.innerHTML=''
  },3000)
}

success.addEventListener('click',()=>showToast('Event Completed Succesfully'))
error.addEventListener('click',()=>showToast('Event Errored Succesfully'))
invalid.addEventListener('click',()=>showToast('Event Invalidet Succesfully'))