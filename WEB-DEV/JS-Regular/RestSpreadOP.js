var returnedVal=Math.max(1,4,6,2,8)
// console.log(returnedVal)

var myObj={}
Object.assign(myObj,{a:1,b:2,c:3},{z:9,y:8,x:7})
// console.log(myObj)

const myArr=[3,5]
function myFun(a,b){
  return a+b
}
// console.log(myFun(...myArr))


function mySum(a,b,...args){
  let sum=0;
  let mul=1;
  sum+=a+b;
  for (const elem of args) {
    mul*=elem
  }
  return [sum,mul]
}
console.log(mySum(4,5,5,2,3))
