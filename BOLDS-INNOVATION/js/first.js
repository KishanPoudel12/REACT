//Add
let add=(a,...args)=>{
  let sum=a;
  for (const elem of args) {
    sum+=elem
  }
  return sum;
}
console.log('Add:1+2+3+4=',add(1,2,3,4));

//Mul
let Mul=(a,...args)=>{
  let mul=a;
  for (const elem of args) {
    mul*=elem
  }
  return mul;
}
console.log("Mul :1*2*3*4",Mul(1,2,3,4));

//Div
let Div=(a,b)=>{
return a/b;
}
console.log("Div:4/3",Div(4,3));

//Sub
let Sub=(a,...args)=>{
  let sub=a;
  for (const elem of args) {
    sub-=elem
  }
  return sub;
}
console.log("Sub:100-50-40",Sub(100,50,40));