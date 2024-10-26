const name ="Kishan ";
const repoCount=50;

console.log(name +repoCount+ " hello");//Old way to write js ,not considered good
console.log(`Hello my name is ${name.toLocaleUpperCase()} and my repo is ${repoCount}`);//Good to write it with backtics 


const gameName=new String('Kishan');
console.log(gameName.__proto__);//=> {}
console.log(gameName.length);//=> 6
console.log(gameName.toUpperCase());//=> KISHAN
console.log(gameName);//=> kishan
console.log(gameName.charAt(5));//=> 'n'
console.log(gameName.indexOf('r'));//=> -1
console.log(gameName.indexOf('s'));//=> 2

const Kishan= "Kis-Han";
const newString=Kishan.substring(0,3);// Third Index is not being Included :)
console.log(newString);
const anotherString=gameName.slice(-8,4);// can give negative index to it 
const Hello="    Kishan     ";
console.log(Hello);//     Kishan    
console.log(Hello.trim());// Kishan without spaces 

const url="https://Kishan.com/Kishan%20Poudel"; //sometimes in the url link in case of empty space %20 overwrites it
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes("hello"));//Does not inclue so Flase 

const Myname= "kishan-is-batman";
console.log(Myname.split('-'));// => [ 'kishan', 'is', 'batman' ]