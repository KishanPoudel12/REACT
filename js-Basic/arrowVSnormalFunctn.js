const button=document.querySelector('button')

button.addEventListener('click',e=>{
  console.log(this)       //it gives the whole window 
  console.log('hi me ')
})

button.addEventListener('click' , function (e){
  console.log(this)      //it gives the button only
  console.log('hello there ')
})