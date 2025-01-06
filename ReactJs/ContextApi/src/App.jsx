import React from 'react'
import Login from './components/login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'
function App() {
  return (
  <UserContextProvider>
    <h1 className='bg-green-400 p-5 text-4xl '>KISHAN POUDEL</h1>
    <Login/>
    <Profile/>
  </UserContextProvider>
  )
}
export default App
