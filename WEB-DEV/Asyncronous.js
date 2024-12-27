//Creating Promise 

const promise=new Promise((resolve,reject)=>{
  let randomNum=Math.floor(Math.random()*10)
  setTimeout(()=>{
    if(randomNum>0){
      resolve("well Done ! Right guess")
    }else{
      reject("Oops ! wrong")
    }
  },2000)
})
//Consuming the created Promise 

promise.then((value)=>{
  console.log(value)
}).catch((error)=>{
  console.log(error)
})