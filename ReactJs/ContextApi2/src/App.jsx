import React, { useEffect } from 'react'
import {ThemeProvider} from './Context/theme'
import ThemeBtn from './Components/ThemeButton'
import Card from './Components/Card'
function App() {
  const [themeMode,setThemeMode]=React.useState('light')
  const lightTheme =()=>{
      setThemeMode('light')
  }
  const darkTheme=()=>{
    setThemeMode('dark')
  }

  //Actual change in theme 

  useEffect(()=>{
      document.querySelector('html').classList.remove('light','dark')
      document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <h1 className='bg-green-300 text-3xl p-4'>Hello</h1>
      
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
