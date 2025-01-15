import React, { useEffect, useState } from 'react'

function Github({url}) {
  const [user,setUser]=useState('')
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState(null)

 async function fetchGithub(){
    try{
      setLoading(true)
      const res= await fetch(`https://api.github.com/users/${user}`)
      const Data= await res.json()
      console.log("Data=",Data)
      if(Data){
        setLoading(false)
        setData(Data)
      }
    }catch(error){
      setLoading(false)
      setError(error.message)
    }
  }

  // useEffect(()=>{
  //   fetchGithub()
  // },[url,setUser])
  
  if(loading){
    return <h1>Loading Please Wait</h1>
  }
  if(error){
    return <h1>Error :{error}</h1>
  }

   function handleSubmit(){
    if(user.trim()===''){
     window.alert(`Enter valid name`)
    }

    fetchGithub()
   }

  return (
    <div className='container'>
      <div className="searchContainer">
        <input type="text"  value={user}  onChange={(e)=>setUser(e.target.value)}  placeholder='User Name Here'  />
        <button className='submit-btn' onClick={handleSubmit} >Submit</button>
      </div>
      <div className="displayContainer">
        <div className='img-container'>
          <img />

        </div>
        <div className="details">
          <p className="name"></p>
          <p className="bio"></p>
          <p className="followers"></p>
        </div>
      </div>
      
    </div>
  )
}

export default Github