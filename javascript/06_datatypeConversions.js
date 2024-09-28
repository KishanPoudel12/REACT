let score="Kishan";//Previously it was 45 which is convertable to Number so the value printed was 45 ,but with kishan it is not the same case 
console.log(typeof score);//number
 
//type conversion 

let conversion =Number(score);
console.log(typeof score);//string
console.log(typeof conversion);//Number
console.log(conversion);
//"45"==>33 
//"kishan"==>NaN

let isLoggedIn="kishan";
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//Something in string =>true  //Empty string =>False

let kishan =45;
let stringKishan=String(kishan);
console.log(stringKishan);
console.log(typeof stringKishan);


