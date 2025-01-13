import React from 'react'
import MenuList from './menu-list'
import menus from './data'
import './style.css'

function TreeView() {
  return (
    <div className='tree-view'>
      <MenuList lists={menus}/>
    </div>
  )
}

export default TreeView