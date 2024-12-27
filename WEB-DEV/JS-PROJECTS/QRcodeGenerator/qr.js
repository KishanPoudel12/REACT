const input=document.querySelector('.input')
const generate=document.querySelector('.generate')
const show=document.querySelector('.show')

const fetchQr =()=>{
  if(input.value){
    const userInput=input.value;
    show.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userInput}`
  }else{
    alert('Empty input box')
  }
}
// generate.addEventListener('click',fetchQr)