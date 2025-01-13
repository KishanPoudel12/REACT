import React from 'react'
import { Link } from 'react-router'
import './Header.css'
function Header() {
  return (
    <div className='header'  >
        This is Header
      <div className='Navbars' >
        <ul>
          <li><Link  to='/'>   Home    </Link></li>
          <li><Link  to='User'> User   </Link> </li>
          <li><Link  to='Login'> Login </Link></li>
          <li><Link  to='About'> About </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header