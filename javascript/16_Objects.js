/////////////////Learn more methods...////////////////////////

  //OBJECTS DECLARATION TECHNIQUES ==> singleton (from constructors) 
  //OBJECT LITERALS 

  // Object.create(will study later)
  
  //Symbol as a key value in object (i.e adding symbol to key )

  const mySym=Symbol("key1");

  const User={
   name :"kishan",
   class:"Third Year",
   [mySym]: "key1",//this is how we do it 
   age:18,
   email:"KishanPoudel@gmail.com",
   isLoggedIn: true
  }
  console.log( typeof User[mySym]);
  console.log(User["email"]);// More universal then dot type since dot op cannot access members of an obj with both key and value pair of string :)
  //changing the values of obj
  User.name="KISHAN";
  console.log(User);
  // Object.freeze(User);
  // User.name="POUDEL";
  console.log(User);

  //Entering the function to the object 
  
  User.greeting=function(){
    console.log(`Hello its me ${this.name} :)`);
  } 
  console.log(User.greeting());

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


 //Objects using constuructors :)

 //singleton OBJ=> const tinderUser= new Object();
 const tinderUser={ }
 tinderUser.id="123abc";
 tinderUser.name="Kishan"
 tinderUser.isLoggedIn=false;

//  console.log(tinderUser);

const obj1={1 : 'a',3 : 'c',5 : 'e'};
const obj2={2 : 'b',4 : 'd',6 : 'f'};
// const obj3={obj1,obj2}; //Not this way 
const obj3=Object.assign({},obj1,obj2);//An empty object is given to store after joining all of them , if not put then 
// the first elem gets converted into the sum of all objects and hence obj1 becomes the sum ,which is better not done 
console.log(obj3);

//Most used method probably
const obj4={...obj1,...obj2};
console.log(obj4);

//we can have array of objects 
const users=[
  {
    id:1,
    email:"KishanPoudel@gmail.com"
  },
  {
    id:2,
    email:"KishanPoudel@gmail.com"
  },
  {
    id:3,
    email:"KishanPoudel@gmail.com"
  },
  {
    id:4,
    email:"KishanPoudel@gmail.com"
  }
]
console.log(users);

console.log(tinderUser);//=> { id: '123abc', name: 'Kishan', isLoggedIn: false }
console.log(Object.keys(tinderUser));//=>[ 'id', 'name', 'isLoggedIn' ]
console.log((Object.values(tinderUser)));//=>[ '123abc', 'Kishan', false ]
console.log(Object.entries(tinderUser));// =>[ [ 'id', '123abc' ], [ 'name', 'Kishan' ], [ 'isLoggedIn', false ] ]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const course ={
  courseName:"kishanJS",
  price :"999",
  courseTeacher: "Kishan"
}
// console.log(course.courseName); ==>Normal way to write But what if we want to write it in React way or more efficient way
const {courseTeacher : teacher} =course
console.log(teacher);
//We see ^^^^^^^^^^^^ this thing in react many more times 

