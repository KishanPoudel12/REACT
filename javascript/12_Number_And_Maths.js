//     NUMBER

const score=800;

const balance =new Number(100);
console.log(balance.toString().length);//=> 3
console.log(balance.toFixed(2));//=> 100.00

const number=123.545;
console.log(number.toPrecision(3));


const num=100000000000;
console.log(num.toLocaleString('en-IN'));// comma on the basis of indian num system



//     MATHS

console.log(Math);



console.log(Math.abs(-45));// =>45
console.log(Math.ceil(56.434));//=>57
console.log(Math.floor(56.434));//=> 56
console.log(Math.sqrt(4));//=> 2
console.log(Math.max(4,5,2,4,5,3));// =>5
console.log(Math.floor(Math.random()*10) +1); // any random value between 0 to 1


//Method to use to implement math.random in 

const min =10; //Minimum value to obtain 
const max=20; //Maximum value to obtain 
console.log(Math.floor(Math.random() * (max-min+1))+min);  //random number between 10-20