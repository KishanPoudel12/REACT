const preHeatOven=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const preHeatOven=true;
      if(preHeatOven){
        resolve("PreHeat Oven to 180degrees")
      }else{
        reject("Failed to heat oven")
      }
    },1000)
  })
}
const AddSuger=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const addSuger=true;
      if(addSuger){
        resolve("Added Suger")
      }else{
        reject("Failed to add Suger")
      }
    },1000)
  })
}
const addFlour=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const addedFlour=true;
      if(addedFlour){
        resolve("Flour Added")
      }else{
        reject("Flour Addition Failed")
      }
    },1000)
  })
}
const bakeMixture=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const bakedMixture=true;
      if(bakedMixture){
        resolve("Mixed")
      }else{
        reject("Failed Mixing")
      }
    },1000)
  })
}


const bakeChocolate= async ()=>{

  try{

    const taskOne =await preHeatOven ();
    console.log(taskOne)
     
    const taskTwo=await AddSuger();
    console.log(taskTwo)
  
    const taskThree =await addFlour ();
    console.log(taskOne)
     
    const taskFour=await bakeMixture();
    console.log(taskTwo)
  }
  catch(error){
    console.log(error)
  }
}
 bakeChocolate();
