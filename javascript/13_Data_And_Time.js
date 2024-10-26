// Dates 
let myDate =new Date();
console.log(myDate); // =>2024-09-29T04:57:16.532Z(on today's date it is showing this)
console.log(myDate.toString()); // =>Sun Sep 29 2024 10:28:36 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // =>Sun Sep 29 2024
console.log(myDate.toLocaleDateString()); //=> 29/9/2024
console.log(myDate.toISOString()); //=>2024-09-29T05:02:17.708Z
console.log(typeof myDate);//=> object

const newDate=new Date(2024,0,273);// Month starts from index 0(zero) when written in this format 
console.log(newDate.toString());

const date= new Date("01-16-2024");
console.log(date.toLocaleString());

let mytimeStamp=Date.now();
console.log(mytimeStamp);

const din=new Date();
console.log(din.getMonth()+1);//since the index starts from 0 so din will start its indexing from 0 so add one to get exact month
