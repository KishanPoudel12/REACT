import React from 'react'
import UserContext from './Usercontext.js'

//Creating the provider 
const UserContextProvider =({children}) =>{
  const [user ,setUser] =React.useState(null);  //what data to access ? => this data to access user and setUser 
  return(
    <UserContext.Provider value={ {user , setUser} }>
    {children}
    </UserContext.Provider>
  )
}
export default  UserContextProvider;