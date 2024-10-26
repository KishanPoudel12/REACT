//for user to be accessed from the direct links 

import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
  const {userid} = useParams()
  return (
    <div className="bg-gray-500 p-5 text-orange-500" > User  :{userid}</div>
  )
}

export default User