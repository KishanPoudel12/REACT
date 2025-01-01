import React,{useState} from 'react'
function App() {
  let [color,setColor]= useState('olive')
  return ( 
    <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
      <div className="flex  items-center content-center mb-0" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className="green" onClick={()=>setColor('green')} style={{height:50 , width:70 , backgroundColor: 'green' ,color:'white' ,padding:10 ,borderRadius:20, cursor:'pointer' }}>Green</div>
        <div className="red" onClick={()=>setColor('red')} style={{height:50 , width:70 , backgroundColor: 'red' ,color:'white' ,padding:10 ,borderRadius:20, cursor:'pointer' }}>Red</div>
        <div className="blue" onClick={()=>setColor('blue')} style={{height:50 , width:70 , backgroundColor: 'blue' ,color:'white' ,padding:10 ,borderRadius:20, cursor:'pointer' }}>Blue</div>
        <div className="purple" onClick={()=>setColor('purple')} style={{height:50 , width:70 , backgroundColor: 'purple' ,color:'white' ,padding:10 ,borderRadius:20, cursor:'pointer' }}>Purple</div>
        <div className="brown" onClick={()=>setColor('brown')} style={{height:50 , width:70 , backgroundColor: 'brown' ,color:'white' ,padding:10 ,borderRadius:20, cursor:'pointer' }}>Brown</div>
      </div>
    </div>
  )
}
export default App
