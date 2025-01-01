// const promise=new Promise((resolve ,reject)=>{
//    resolve("Well done Promise one ")
// })
// const promiseTwo=new Promise((resolve ,reject)=>{
//   resolve("Well done Promise Two ")
// })
// const promiseThree=new Promise((resolve ,reject)=>{
//   reject("Better Luck next time ")
// })

// promise.then((value)=>{
//   console.log(value)
//   return promiseTwo
// })
// .then((value)=>{
//   console.log(value)
//   return promiseThree
// })
// .catch((error)=>{
//   console.log(error)
// })


//Another Method to consume a PROMISE
const promiseOne=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Promise One Resolved')
  },2000)
})

const promiseTwo=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Promise Two Resolved')
  },2000)
})
//Fire off the both promise at once
Promise.all([promiseOne,promiseTwo])
.then((data)=>{ console.log(data[0],data[1])})
.catch((error)=>console.log(error))

