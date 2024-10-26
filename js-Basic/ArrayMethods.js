// const a =[7,6,5,3,2,1]

// // a.forEach((Number,index) => {
// //   console.log(Number +" is in Index "+index)
// // });

//  let c =a.find((x)=> (x>2))
// console.log(c)                 //Returns the first element that is true to the conditioin 


// let d=a.reduce((acc,curr)=>{return (acc += curr)})
// console.log(d)


// let items=[
//   {price:100},
//   {price :200},
//   {price :500}
// ]

// let totalPrice = items.reduce((acc,curr)=> (acc += curr.price),0)
// console.log(totalPrice)


//some of array methods 

let arr=[2,3,1,5,7,9]
//findLength
console.log(arr.length)

//stack operation push 
arr.push(55)
console.log(arr.length)

//Find the index of any element 
console.log(elementAt(arr,4))  
//Reverse of the above method 

function elementAt(array,index){
  const newArray=array.join('')
  return newArray.charAt(index)
}


//Add an items to start 
arr.unshift(4)
console.log(arr)
//Removes the first element from the array (opposite of unshift)
console.log(arr.shift())

let arrMe=[0,1,2,3,4,5,6]
// console.log(arrMe.splice( 1,3))   //Cuts the array (The original Array ) also all elements of the given index are included i.e. [initial ,final]
// console.log(arrMe)
console.log(arrMe.slice(1,3))  //cuts the copy of the array and also it is in the format of   [initial ,final ) i.e final index excluded 
console.log(arrMe)
