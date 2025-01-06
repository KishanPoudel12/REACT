import React,{createContext,useState} from 'react'

export const CartContext=createContext()


export const ContextProvider=(props)=>{
  const [item,setItem]=useState([])
  return (
  <CartContext.Provider value={{item,setItem}}>
    {props.children}
  </CartContext.Provider>
  )
}
