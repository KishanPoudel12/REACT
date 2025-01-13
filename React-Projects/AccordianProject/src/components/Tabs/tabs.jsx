import React, { useEffect, useState } from 'react'
import './style.css'
function Tabs({tabsList,onChange}) {
  const [clicked,setClicked]=useState(0)
  function handleClick( getCurrInd){
    console.log('getCurrId=',getCurrInd)
    setClicked( clicked !== getCurrInd ? getCurrInd : clicked)
    onChange(getCurrInd)
  }
  
  useEffect(()=>{
    console.log('clicked=',clicked)
  },[clicked])
  return (
    <div className='tab-container'>
      <div className='Tab-Header'  >
            {
              tabsList && tabsList.length ? 
              tabsList.map((item,ind)=><div style={{backgroundColor: `${clicked ===ind ? 'green' : 'white' }`}} onClick={(e)=>handleClick(ind)} key={ind} className={item.label}>
                <span >{item.label}</span>
              </div>)
              :null
            }
      </div>
      <div className='Tab-Content' style={{color:'red'}} >
        {
        tabsList[clicked] && tabsList[clicked].content
        }
      </div>
    </div>
  )
}

export default Tabs