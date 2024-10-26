import {useState} from 'react'
import React from 'react'
function App(){
   const condn1=()=>{
    if(counter < 20){
      setCounter((prevCounter)=>(prevCounter+1))
      setCounter((prevCounter)=>(prevCounter+1))
      setCounter((prevCounter)=>(prevCounter+1))
      console.log(counter);
    }else {
      console.log(" above 20 no increment back off the button ")
    }
  }
  const condn2=()=>{
    if(counter>0){
      // setCounter(counter-1) //Having multiple this thing is uselesss but what if we want it to run then what can we do to make it happen ??
      setCounter((prevCounter)=>(prevCounter-1))  //passing as a retruned value 
      setCounter((prevCounter)=>(prevCounter-1))
      setCounter((prevCounter)=>(prevCounter-1))
      console.log(counter);
    }else {
      console.log(" below 0 no decrement back off the button ")
    }
   }


   let [counter,setCounter] = useState(1)  //The variable names taken here is not a compoulsary names just the conventions 
  // let counter=0;  ==>This way we cannot change the value of an variable in the UI so we need to use hooks 
  const  addValue=()=>{
  //  counter++;     ==>This way we cannot change the value of an variable in the UI so we need to use hooks 
  // setCounter(counter+1) 
  condn1();
  }
  const subValue=()=>{
    // counter--;    ==>This way we cannot change the value of an variable in the UI so we need to use hooks 
    condn2();
    // setCounter(counter-1) 
  }
  return(
    <>
    <h1> Hello its me kishan!</h1>
    <h2>Counter Value :{counter}</h2>
     <button onClick={addValue}>COUNTER ++{counter}</button>
     <button onClick={subValue}>COUNTER - -{counter}</button>
    </>
  )
}
export default App
