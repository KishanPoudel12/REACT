import React  from 'react'
import {useState} from 'react'
import "./index.css"
function App() {
  const [color,setColor]=useState("olive")
  return (
    <div className="w-full h-screen  duration-200 "  style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
        <div className= " flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2  bg-blue-200 rounded-3xl">
          <button className="outline-none px-4 rounded text-white"style={{backgroundColor:"red"}} onClick={()=>setColor("red")} >Red</button>
          <button className="outline-none px-4 rounded text-white"style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")} >Blue</button>
          <button className="outline-none px-4 rounded text-white"style={{backgroundColor:"green"}} onClick={()=>setColor("green")} >Green</button>
          <button className="outline-none px-4 rounded text-white"style={{backgroundColor:"black"}} onClick={()=>setColor("black")} >black</button>
          <button className="outline-none px-4 rounded text-white"style={{backgroundColor:"orange"}} onClick={()=>setColor("Orange")} >Orange</button>
          <button className="outline-none px-4 rounded text-white"style={{backgroundColor:"pink"}} onClick={()=>setColor("Pink")} >Pink</button>
        </div>
      </div>
    </div>
  )
}
export default App
