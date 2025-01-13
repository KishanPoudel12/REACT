import React from 'react'
import MenuItem from './menu-item'
import './style.css'
function MenuList({lists}) {
  return (
    <ul className="menu-list-container">
     {
       lists && lists.length > 0 ? 
       lists.map((listItem,ind)=><MenuItem  key={ind} item={listItem} />)
       :<h1>Error : Either List not Present or list.length less than 0</h1>
      }
    </ul>
  )
}

export default MenuList