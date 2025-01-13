import React from 'react'
import useLocalStorage from './useLocalStorage'
import './style.css'
function LightDarkMode() {
  const [theme,setTheme]=useLocalStorage('theme','dark')
  function handleClick(){
    setTheme( theme === 'light' ? 'dark' : 'light')
    console.log(theme)
  }
  return (
    <div className={`body ${theme}`} >
    <div className='header'>Light Dark Mode</div>
    <button onClick={handleClick}>Change Theme</button>
    </div >
  )
}

export default LightDarkMode