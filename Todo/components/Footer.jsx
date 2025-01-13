import React from 'react'
import './Footer.css'
function Footer() {
  let todayYear=new Date().getUTCFullYear()
  console.log(todayYear)
  return (
    <div className='footer'>
      All Rights Reserved {todayYear}
    </div>
  )
}

export default Footer