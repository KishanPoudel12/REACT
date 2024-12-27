const  inputBox=document.querySelector('#input-box')
const  addBtn=document.querySelector('button')
const  taskContainer=document.querySelector('#list-container')
function addTask(){
  if(inputBox.value===''){
    alert('Please Enter the Task!')
  }else{
    let li=document.createElement('li')
    li.innerHTML=inputBox.value;
    taskContainer.appendChild(li)

    const checkBtn=document.createElement('button')
    checkBtn.innerHTML='Check'
    li.appendChild(checkBtn)
    const deleteBtn=document.createElement('button')
    deleteBtn.innerHTML='Delete'
    li.appendChild(deleteBtn)

    checkBtn.addEventListener('click',()=>{
      li.style.textDecoration='line-through'
      saveData()
    })
    
    deleteBtn.addEventListener('click',()=>{
      li.remove()
      saveData()
    })
    inputBox.value=''
    saveData(); 
  }
}
addBtn.addEventListener('click',addTask)

function saveData(){
  localStorage.setItem('data',taskContainer.innerHTML)
}
function showData(){
  taskContainer.innerHTML=localStorage.getItem('data')||''
}
showData()