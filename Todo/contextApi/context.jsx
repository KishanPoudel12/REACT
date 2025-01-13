import React,{createContext,useEffect,useState} from 'react'

export const TodoContext=createContext()

export const TodoContextProvider=(props)=>{
  const [tasks,setTasks]=useState(()=>{
    const savedTasks = window.localStorage.getItem('tasks');
    console.log(savedTasks)
    return savedTasks ? JSON.parse(savedTasks) : [];
  })

  const [dateInp,setDateInp]=useState('')
  const [taskInp,setTaskInp]=useState('')

useEffect(()=>{
  console.log("from context",tasks)
  window.localStorage.setItem('tasks',JSON.stringify(tasks))
},[tasks])

  const addTask=(task,date)=>{
    setTasks((prev)=>[...prev,{task,date}])
  }
  return (
    <TodoContext.Provider value={{tasks,dateInp,setDateInp,setTaskInp,addTask,taskInp}}>
      {props.children}
    </TodoContext.Provider>
  )
}
