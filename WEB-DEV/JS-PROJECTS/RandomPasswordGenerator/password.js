const  passwordDisplay=document.querySelector('.passwordDisplay')
const copyBtn=document.querySelector('.copyBtn')
const characters=document.querySelector('.characters')
const numbers=document.querySelector('.numbers')
const specialCharacters=document.querySelector('.specialCharacters')
const generatePassword=document.querySelector('.generate')

function generatePass(){
  let password=''
  let passwordArr=[];
  const passLen=10;

  if(characters.checked){
    passwordArr.push(...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
  }
  if(numbers.checked){
    passwordArr.push(...'0123456789')
  }
  if(specialCharacters.checked){
    passwordArr.push(...'~`!@#$%^&*()_+={}|:;<>,.?/')
  }
  if(passwordArr.length===0){
    alert('Enter Password')
  }
  console.log(passwordArr)
  for(let i=0;i<passLen;i++){
    let random=Math.floor(Math.random()*passwordArr.length)
    password+=passwordArr[random]
  }
  passwordDisplay.value=password
}

function copyPassword(){
  passwordDisplay.select()
  navigator.clipboard.writeText(passwordDisplay.value)
}
copyBtn.addEventListener('click',copyPassword)
generatePassword.addEventListener('click',generatePass)