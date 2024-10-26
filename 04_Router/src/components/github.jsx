import React ,{useEffect} from 'react'
import {useLoaderData  } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
  // const [data, setData ]= useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/KishanPoudel12').then(response=>response.json()).then(data=>{
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])

  return (
    <div className='"flex flex-col justify-between bg-gray-300  ' >
    <h1 className='text-white-500  ' >Github followers :{data.followers}</h1>
    <img  className='  rounded-full ' src={data.avatar_url}/>
     </div>
    
  )
}

export default Github

export const githubInfoLoader= async ()=>{
   const response = await fetch('https://api.github.com/users/KishanPoudel12')
   return response.json();
}