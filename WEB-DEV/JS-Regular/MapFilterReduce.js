const arr=[1,2,3,4,5]
let arrMap=arr.map(item=>item.toString(2))
console.log(arrMap)
console.log(arr)

//FILTER
let filter=arr.filter(item =>item<4)
console.log(filter)
console.log(arr)

let oddFilter=arr.filter(item=>item%2)
console.log(oddFilter)


//REDUCE 

const reduce= arr.reduce((acc ,curr)=>{
  acc=acc+curr
  return acc
},0)
console.log("Reduced :",reduce)

//Find max value in Array

const arr2=[1,2,3,4,5]

const max=arr2.reduce((acc ,curr)=>{
    if(curr>acc){
      acc=curr
    }
    return acc
} ,0)

console.log(max)


const users=[
  {firstname:"kishan", lastname:"Poudel",age:19 },
  {firstname:"Hello", lastname:"World",age:29 },
  {firstname:"Hey", lastname:"There",age:39 },
  {firstname:"Hi", lastname:"Me",age:29 }
]

// [ 'kishan Poudel', 'Hello World', 'Hey There', 'Hi Me' ]
let fullName=users.map(item=>`${item.firstname} ${item.lastname}`)
console.log(fullName)

// {29:2 19:1 39:1 }
let sameAge=users.reduce((acc,curr)=>{
  let count=0;
  if(acc.age===curr.age){
    count++;
  }
  return `${acc.age}: ${count}`
},{})
console.log(sameAge)