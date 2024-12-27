const createNoteBtn=document.querySelector('.createNote')
const noteContainer=document.querySelector('.noteContainer')

// function updateStorage(){
//   localStorage.setItem('noteStorage',noteContainer.innerHTML)
// }
// function savedStorage(){
//   localStorage.getItem('noteStorage')
// }
createNoteBtn.addEventListener('click',()=>{
  // const noteContainer=document.createElement('div')
  const para=document.createElement('p')
  para.setAttribute('contenteditable','true')
  para.classList.add('note')
  const img=document.createElement('img')
  img.src=`https://c8.alamy.com/comp/2EA32GC/delete-text-written-on-red-grungy-zig-zag-borders-round-stamp-2EA32GC.jpg`
  img.style.height='30px'
  img.style.width='30px'
  img.style.marginRight='0px'
  img.style.marginBottom='0px'
  para.append(img)
  noteContainer.append(para)
  document.querySelectorAll('noteContainer')
  img.addEventListener('click',()=>{
    para.remove()
    // updateStorage()
  })
})