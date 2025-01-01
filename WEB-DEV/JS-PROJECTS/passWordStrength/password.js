const text=document.querySelector('.text')
const strength=document.querySelector('.strength')

text.addEventListener('input',()=>{
  // strength.innerHTML='Pass not Entered'
  // strength.innerHTML.color='red'
  if(text.value.length<1){
    strength.innerHTML=`PassWord Not Entered`
    strength.style.color='orange'
  }
   if(text.value.length>1 && text.value.length<8){
    strength.innerHTML=`PassWord at least 8 char`
    strength.style.color='yellow'
  }
  if(text.value.length>8 ){
    strength.innerHTML=`PassWord Valid`
    strength.style.color='green'
  }
})
