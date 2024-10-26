// const btn=document.querySelector('[data-btn]')
// console.log(btn)

// function printConsole(){
//   console.log('clicked')
// }

// btn.addEventListener('click',printConsole)

// // btn.addEventListener('click',()=>{              // Can add as many event listners as we want 
// //   console.log("clicked2")
// // })

// // so if we know how to add an event listner we also need to be able to remove it so we have another method called 
// // Remove event listenres we can implement then this wey 

// /* 

// btn.removeEventListener( 'Event' , fn of task to do on Event )
 
//     since initiall we gave the unnamed arrow functions in th addEventListners so we cannot implement removeEvent listners ,
//     so we do a thing we just make a new  common function for storing the event to do on event listners and use it at everywhere required 
// */

// btn.removeEventListener('click',printConsole)   //Here the "clicked " is no more printed in the console and only "clicked2 " is printed 




// btn.addEventListener('click' , e=>{
//   console.log(e)
// })


// const input= document.querySelector('[data-input-text]')
// console.log(input)

// input.addEventListener('input' , (e)=>
//   console.log(e.target.value==='')              //check whether the input value is an empty string or not 
// )

const form =document.querySelector('[data-form]')

form.addEventListener('submit', e=>{
  e.preventDefault()              //Why do we need this ?=> when we submit it,it is going to be submitted ,but in here we did not specify the location 
  console.log("Form Submitted")  //so it submits to the same page and refreshes the whole page and the thing in the console is erased so to prevent thaat thing it is used 
}
)
//Some examples of eventlistners are 
/*
mouseenter
mouseleave
mouseover
 */


const hi =document.querySelector(".me")              //On the anchor element we prevented the default reload and stopped page from reloading
hi.addEventListener('click' , e=>{ 
  e.preventDefault();
  console.log("hi hi hi ")
})
