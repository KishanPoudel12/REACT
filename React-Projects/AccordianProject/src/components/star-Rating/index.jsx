import React,{useState} from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'

const StarRating=({noOfStars})=>{
  const [rating,setRating]=useState(0)
  const [hover,setHover]=useState(0)

  function handleClick(getCurrId){
     setRating(getCurrId)
     console.log(getCurrId)
  }
  function handleMouseOver(getCurrId){
    setHover(getCurrId)
    console.log(getCurrId)
 }
 function handleMouseLeave(getCurrId){
  setHover(rating)
  console.log(getCurrId)
}
  return (
    <div className='star-rating' style={{display:'flex'}}>
      {
        [...Array(noOfStars)].map((_,index)=>{
          index+=1
          return <FaStar
          className={index<=(hover || rating)? 'active' : 'inactive'}
          key={index}
          size={40}
          onClick={()=>handleClick(index)}
          onMouseOver={()=>handleMouseOver(index)}
          onMouseLeave={()=>handleMouseLeave(index)}
          />
        })
      }
    </div>
  )
}
export default StarRating