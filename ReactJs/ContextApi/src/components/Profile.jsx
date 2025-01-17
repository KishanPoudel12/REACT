import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  const {user} =  useContext(UserContext)
    if(!user) return <div>Log in </div>
    return <div>Hello {user.username}</div>
}
export default Profile