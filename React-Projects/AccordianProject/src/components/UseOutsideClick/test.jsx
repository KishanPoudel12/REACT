import React, { useEffect, useState,useRef } from "react";
function UseOnClickOutside() {
const [showModal,setShowModal]=useState(false)
const modalRef=useRef(null)


function handleOnClick(e){
  if(modalRef.current && !modalRef.current.contains(e.target)){
    setShowModal(false)
  }
}

 useEffect(()=>{
   if(showModal){
     window.addEventListener('mousedown',handleOnClick)
   }
   
   return ()=>{
    window.removeEventListener('mousedown',handleOnClick)
   }
 },[showModal])
  

  return (
    <div className="container">
        {
            showModal ? <h1 className="modal" ref={modalRef} > This is the Modal </h1> : <button className="btn" onClick={()=>setShowModal(true)}> SHOW MODAL</button>
        }
    </div>
  );
}
export default UseOnClickOutside;
