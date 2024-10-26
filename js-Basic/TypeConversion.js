                  //EXPLICIT TYPE CONVERSIONS 

let a ="1";
console.table( typeof parseInt(a)); //parseInt converts string to integer(number) but only before of decimal value so for decimal values we need 

let b="6.9";
console.log( typeof parseFloat(b))

//To do the opposite we can do

let c=5;
console.log(typeof c);

console.log(typeof c.toString())

                          //IMPLICIT TYPE CONVERSION 

let g=1;
const me='hello';


console.log(typeof (g+me));