const inputTask=document.querySelector('#input-task')
const inputBtn=document.querySelector('#add-task')
const taskContainer=document.querySelector('.task-container')

inputBtn.addEventListener('click',()=>{
  let Task=document.createElement('div')
  Task.classList.add('task')

  let h4=document.createElement('h4')
  h4.innerText=inputTask.value
  Task.appendChild(h4)

  let checkBox=document.createElement('button')
  checkBox.innerHTML='<i class="fa-solid fa-check"></i>'
  checkBox.classList.add('checkbox')
  h4.appendChild(checkBox)

  let deleteBox=document.createElement('button')
  deleteBox.innerHTML='<i class="fa-solid fa-trash-can"></i>'
  deleteBox.classList.add('deletebox')
  h4.appendChild(deleteBox)

  checkBox.addEventListener('click',()=>{
    h4.style.textDecoration='line-through'
  })
  deleteBox.addEventListener('click',()=>{
    Task.remove()
  })

  if(inputTask.value===""){
    alert("Enter Task !")
  }else{
    taskContainer.appendChild(Task)
    inputTask.value=""
  }

})
