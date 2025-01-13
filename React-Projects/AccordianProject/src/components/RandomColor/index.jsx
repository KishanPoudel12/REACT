import React,{useEffect, useState} from 'react'
 const RandomColor=()=>{
  const [colorType,setColorType]=useState('hex')
  const [color,setColor]=useState('#999999')
  useEffect(()=>{
    generateColor(colorType)
  },[colorType])

  function generateColor(Ctype){
    if(Ctype==='hex'){
      let hex='#';
      const hexElements = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
      for(let i=0;i<6;i++){
        hex+=hexElements[Math.floor(Math.random()*hexElements.length)]
      }
      console.log(hex)
      setColor(hex)
    }else if(Ctype==='rgb'){
      let rgb=`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
      setColor(rgb)
    }
  }
  return (
    <div style={{
      height:'100vw',
      widht:'100vw',
      backgroundColor:color
    }}>
      <button onClick={()=>setColorType('hex')}>HEX COLOR</button>
      <button onClick={()=>setColorType('rgb')}>RGB COLOR</button>
      <button onClick={()=>generateColor(colorType)}>GENERATE</button>
      <div className='showColor'>{colorType}={color}</div>
    </div>
  )
}
export default RandomColor