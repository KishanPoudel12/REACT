const display=document.querySelector('#screen')
const button=document.querySelectorAll('.buttons')
// console.log(button)

function clearScreen(){
  display.value=''
}
function calculate(){
  let input='';
  button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      if(e.target.innerText.trim()==='AC'){
        input=''
        display.value=input
      }else if(e.target.innerText.trim()=='='){
        let result=eval(display.value)
        // input=''
        display.value=result
      }else if(e.target.innerText=='DE'){
        input=input.slice(0,-1)
        display.value=input
      }
      else{
         input += e.target.innerText
         display.value=input
        //  console.log(input)
      }
    })
  })
}
calculate()
