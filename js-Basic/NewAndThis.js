const date =new Date()
console.log(date.getDate())


///Very Important 


// function createUser(name,age ){
//  return {name:name ,age:age}
// }

// const user =createUser('kishan',45);
// console.log(user)

//OK ! the above function is good it cretes the object  and all but js provides much easy or most used case type of way to do it 
// and it is like this 

function User(name,age){
  //this={}      //when constructor is called then this happens internally 
  this.name=name;
  this.age=age;
}

const user = new User('kishan',45);
console.log(user)
const newUser= new User('me',56)
console.log(newUser)