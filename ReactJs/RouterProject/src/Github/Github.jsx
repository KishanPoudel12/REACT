import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data=useLoaderData()
  return (
    <>
    <div className='bg-green-500 text-4xl text-orange-400 p-4 my-4'>Github :{data?.followers}
    <img src={data?.avatar_url}   width={300} />
    </div>
    </>
  )
}

export default Github

export const  githubInfoLoader=async ()=>{
   const response= await fetch(`https://api.github.com/users/KishanPoudel12`)
   return response.json()
}