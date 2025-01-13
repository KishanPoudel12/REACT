import React, { useState,useContext } from 'react'
import toDoItems from '../data'
import '../style.css'
import { TodoContext } from '../contextApi/context'

function Home() {
  const {dateInp,setDateInp,setTaskInp,addTask,taskInp}=useContext(TodoContext)
  function handleSubmit(e){
    e.preventDefault();
    if(taskInp&&dateInp){
      console.log('taskINp=',taskInp,"Dateinp=",dateInp)
      // setTask((prev)=>[...prev,{task,date}])
      addTask(taskInp,dateInp)
      setDateInp('')
      setTaskInp('')
    }
  }

  return (
    <>    
    <div className='container'>
      <div>TODO</div>
      <form onSubmit={handleSubmit}>
      <input  value={taskInp} onChange={(e)=>setTaskInp(e.target.value)} className='form-text' type="text"  />
      <input value={dateInp}  onChange={(e)=>setDateInp(e.target.value)} className='form-date' type="date" />
      <input className='form-submit' type="submit" />
      </form>
    </div>
    </>
  )
}

export default Home