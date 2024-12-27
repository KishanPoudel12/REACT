const expandBtn=document.querySelectorAll('.expand-button')
const cardBody=document.querySelectorAll('.card-body')
expandBtn.forEach((button,index)=>{
  let btnStatus='collapsed';
  function handleClick(){
    if(btnStatus==='collapsed'){
      cardBody[index].style.display='none'
      expandBtn.innerHTML='Expand'
      btnStatus='expand'
    }else{
      cardBody[index].style.display='block'
      expandBtn.innerHTML='Collapse'
      btnStatus='collapsed'
    }
  }
  button.addEventListener('click',handleClick)
})
