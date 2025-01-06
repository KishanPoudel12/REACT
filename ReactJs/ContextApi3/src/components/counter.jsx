import React, { useContext } from 'react'
import { CounterContext } from '../context/counter'

function Counter() {
  const hello=useContext(CounterContext)
  // console.log(hello)
  return (
    <>
      <button onClick={()=>hello.setCounter(hello.counter+1)}>Increment +</button>
      <button onClick={()=>hello.setCounter(hello.counter-1)}>Decrement -</button>
    </>
  )
}

export default Counter