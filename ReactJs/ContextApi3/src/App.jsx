import React, { useContext } from 'react'
import Counter from './components/counter'
import { CounterContext } from './context/counter'
function App() {
  const hi=useContext(CounterContext)
  console.log(hi)
  return (
    <>
      <h1>The Count is : {hi.counter}</h1><br /> 
      <Counter/><br /> 
      <br />    
      <Counter/><br />   
      <br />   
      <Counter/><br />    
      <br />  
      <Counter/><br />     
    </>
  )
}

export default App