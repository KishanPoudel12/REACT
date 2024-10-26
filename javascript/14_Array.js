// Array 

const MyArray=[3,5,7,4,3,4];
MyArray.push(6); //push 6 to the array
MyArray.pop(); //Pops elem from array
console.log(MyArray);
console.log(MyArray.join());//made string and joined with comma 


//     slice and splice 

console.log("A " ,MyArray); 
const myn1=MyArray.slice(1,3);
console.log(myn1);
console.log("B ",MyArray);

const myn2= MyArray.splice(1,3);
console.log(myn2);
console.log("C ",MyArray);




/////// Arrays 2 ////////
 
const hero =["Superman" ,"saktiman"];
const hero2 =["ironman","spiderman"];
const me=hero.concat(hero2);
console.log(me);


//spread operator 
const all_heros=[...hero,...hero2];
console.log(all_heros);

