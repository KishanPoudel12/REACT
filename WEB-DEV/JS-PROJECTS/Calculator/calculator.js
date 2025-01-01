const display=document.querySelector('#screen')
const button=document.querySelectorAll('.buttons')

function calculate(){
    let input=''
    button.forEach((btn)=>{
      btn.addEventListener('click',(e)=>{
      if(e.target.innerText==='AC'){
        input=''
        display.value=input
      }else if(e.target.innerText==='DE'){
        input=display.value.slice(0,-1)
        display.value= input
      }else if(e.target.innerText==='CASIO'){
        alert('Dont you see other keys ')
      }else if(e.target.innerText==='='){
        let res=eval(input)
        display.value=res
        console.log(res)
      }
      else{
        input+=e.target.innerText;
        display.value=input
      }
    })
  })
}
calculate()