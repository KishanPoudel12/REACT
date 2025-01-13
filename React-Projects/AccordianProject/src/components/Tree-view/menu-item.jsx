import React,{useState} from 'react'
import MenuList from './menu-list'
import './style.css'
function MenuItem({item}) {
  const [closed,setClosed]=useState(false)
  console.log("Closed",closed)
  return (
    <div className='menu-item-container'>
      <p>{item.label}  
            {
              item && item.children ? <span onClick={()=>setClosed(prev=>!prev)}> { closed  ? '-' : '+'}</span> : null
            }
      </p>

      {
        item && item.children && item.children.length >0  && closed ? 
        <MenuList  lists={item.children}/>
        :null
      }
      </div>
  )
}

export default MenuItem