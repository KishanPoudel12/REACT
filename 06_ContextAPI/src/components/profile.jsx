import React,{useContext} from 'react'
import UserContext from '../context/Usercontext'

function Profile() {
  const {User} =useContext(UserContext)
 
  if(!User)
    return <div > Please Log-In</div>
  else
    return <div>Welcome {User.username}</div>
}

export default Profile