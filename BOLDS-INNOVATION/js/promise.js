async function abc(){
  try{
    const response=await fetch(`https://narutodb.xyz/api/character`)
    const data= await response.json()
    console.log(data)

  }catch(error){
    console.log(error)
  }
}
abc()