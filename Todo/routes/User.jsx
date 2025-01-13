import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../contextApi/context';
import './User.css';

function User() {
  const { tasks,setTasks } = useContext(TodoContext);
  console.log('tasks in User side=', tasks);

  const [checked, setChecked] = useState(()=>{
    const savedChecks=window.localStorage.getItem('Checked')
    return savedChecks ? JSON.parse(savedChecks) : Array(tasks.length).fill(false)
  }); 
  console.log('While Initialization', checked);
  
  const handleOnClick = (getInd) => {
    setChecked((prevChecked) =>
      prevChecked.map((state, ind) => (ind === getInd ? !state : state))
    ); 
  };

  const handleDelete = (getInd) => {
    const updatedTask = tasks.filter((_, ind) => ind !== getInd);
    setTasks(updatedTask);
    window.localStorage.setItem('tasks', JSON.stringify(updatedTask)); 
  };
  
  useEffect(()=>{
    window.localStorage.setItem('Checked',JSON.stringify(checked))
  },[checked])

  // useEffect(()=>{
  //   setChecked(Array(tasks.length).fill(false))
  // },[tasks])
  return (
    <div className="todoList">
      <h1>User's Todo Here</h1>
      {tasks && tasks.length ? (
        tasks.map((item, ind) => (
          <li className={checked[ind] ? 'active' : 'inactive'} key={ind}>
            Task: {item.task} & Date: {item.date}
            <button onClick={() => handleOnClick(ind)}>Checked</button>
            <button onClick={()=>handleDelete(ind)}>Delete</button>
          </li>
        ))
      ) : (
        <div>No Task Present</div>
      )}
    </div>
  );
}

export default User;
