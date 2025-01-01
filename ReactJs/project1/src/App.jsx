import React,{ useState } from 'react'
// import ReactDOM from 'react-dom'

function App() {
  let [counter,setCounter] =useState(0)
  // let counter =0
  function addValue(){
    if(counter<20){
      // counter=counter+1;
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)

    }else{
      setCounter(0)
    }
    // document.querySelector('h2').innerHTML=`Counter Value : ${counter}`   it is the js part but what if the variable was used in thousand places then
    // it would have been and headace to do same process so then hooks is intorduced  
  }
  function subValue(){
    if(counter<=0){
      setCounter(20)
    }else{
      counter=counter-1;
      setCounter(counter)
    }
    // document.querySelector('h2').innerHTML=`Counter Value : ${counter}`it is the js part but what if the variable was used in thousand places then
    // it would have been and headace to do same process so then hooks is intorduced  
  }
  return (
    <>
     <h1>Welcome to new Project</h1>
     <h2>Counter Value : {counter}</h2>
     <button onClick={addValue}>ADD</button>
     <button onClick={subValue}>SUB</button>
    </>
  )
}

export default App
