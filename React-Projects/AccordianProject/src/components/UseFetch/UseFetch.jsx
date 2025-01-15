import React, { useEffect, useState } from 'react'

export function UseFetch(url,options={}) {
 const [data,setData]=useState([])
 const [error,setError]=useState(null)
 const [loading,setLoading]=useState(false)

async function fetchApi(){
  setLoading(true)
  try{
    const res= await fetch(url,{...options})
    if(!res.ok) throw Error(res.statusText)
    const data= await res.json()
    setData(data.products)
    setError(null)
    setLoading(false)
  }catch(error){
    setLoading(false)
    setError(error.message)
  }
  console.log("dataAlone=",data)
}
useEffect(()=>{
  fetchApi()
},[url])

return {data,error,loading}
}


