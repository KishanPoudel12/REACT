import React from 'react'

//This is to use that id created in the main Page
import { useParams } from 'react-router-dom'

function User() {
  const {id}=useParams()  
  return (
    <div className='bg-gray-700 p-5 text-orange-500 text-3xl'>User : {id}</div>
  )
}

export default User