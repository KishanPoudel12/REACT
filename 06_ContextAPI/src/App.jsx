import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/profile'
function App() {
  
  return (
    //Now that we have created the context we now use it like this 
    <UserContextProvider>    
    <h1 className="bg-orange-600 font-bold  text-4xl text-center" >CONTEXT API </h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
