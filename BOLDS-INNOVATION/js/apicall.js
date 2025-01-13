const btn =document.querySelector('.api')
console.log(btn)
const img=document.querySelector('img')
console.log(img)
async function promiseFetch(){
  try{
    const response =  await  fetch('https://narutodb.xyz/api/character');
    console.log("Response=",response)
    const data= await response.json()
    img.src=data.characters[Math.floor(Math.random()*(20))].images
    console.log("Data",data)
  }catch(error){
    console.log(error)
  }
}

btn.addEventListener('click',()=>{
  promiseFetch()
})


