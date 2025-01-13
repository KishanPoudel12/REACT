import React, { useEffect, useState } from 'react'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import './style.css'
const ImageSlider=({url,limit=5})=>{
  const [image,setImage]=useState([])
  const [currSlide,setCurrSlide]=useState(0)
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false)
  
 async function fetchImage(getUrl){
  try{
    const response=await fetch(`${getUrl}?page=1&limit=${limit}`)
    const data= await response.json()
    setLoading(true)
    if(data){
      setImage(data)
      setLoading(false)
    }
  }catch(e){
    setError(e.message)
    setLoading(false)
  }
 }
  useEffect(()=>{
    if(url!=='') fetchImage(url)
  })
function handlePrev(){
  setCurrSlide(currSlide ===0 ? image.length-1 : currSlide-1)
}
function handleNext(){
  setCurrSlide(currSlide ===image.length-1 ? 0 : currSlide+1)
}

  if(loading){
    return <div>Loading....</div>
  }
  if(error!==null){
    return <div> Error:{error}</div>
  }
  function handleClick(getInd){
    setCurrSlide(getInd)
  }
  return (
    <div className='container'>
        <BsArrowLeftCircleFill onClick={()=>handlePrev()} className='arrow arrow-left'/>
        {
          image&&image.length?
          image.map((img,ind)=>{
            return <img
            key={img.id}
            alt={img.download_url}
            src={img.download_url}
            className={currSlide===ind? 'current-slide' : 'current-slide hide-current-slide'}
            />
          })
          : null
        }
        <BsArrowRightCircleFill onClick={()=>handleNext()}  className='arrow arrow-right'/>
        <span className='circle-indicator'>
        {
          image&&image.length ? 
          image.map((_,ind)=>{
            return <button 
            onClick={()=>handleClick(ind)}
            className={currSlide===ind? 'me' : 'me hide-current-indicator'}
            key={ind}
            />
          })
          :null
        }
        </span>
    </div>
  )
}
export default ImageSlider