/* 
         STEPS FOR THE APPROACH  
*/
//1. SELECT ALL THE ITEMS 
const  itemList =document.querySelector('#list')
const  form =document.querySelector('#new-item-form')
const  input= document.querySelector('#item-input')

//2.WHEN FORM SUBMITED ADD NEW ITEM 

form.addEventListener('submit' , (e)=>
{
   // prevented defalut activities 
   e.preventDefault();
   console.log(input.value)

   //creating an element to store new inputs 
   const todoList=document.createElement('div')
   todoList.innerText=input.value; //inserting the value of inputbox into the div 
   console.log(todoList)
   todoList.classList.add('list-item') //Giving it a className for further operation on it 
   //bringing it to the website 
   itemList.appendChild(todoList)

   //Removing on clicking the events 
   todoList.addEventListener('click' , (e)=>{
    //  itemList.removeChild(todoList)
        todoList.remove()
   })
   input.value=""   
})


// console.log(input.value)


//3.CREATE NEW ITEM 
  
  

//4.ADD THE ITEM TO THE LIST
  

//5.Empty the value 
  
  
//6. Delete the List 
  
