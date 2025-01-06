import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
function Cart() {
   const me=useContext(CartContext)
   const totalPrice=me.item.reduce((acc,curr)=>{
    acc+=curr.price
    return acc
   },0)
   console.log("me=",me)
   console.log("me.item=",me.item)
  return (
   <>
     <div>ITEMS</div>
   {
      me&&me.item.map(item=> <li>{item.name} - {item.price}</li>)
   }
      <p>Total Price : ${totalPrice}</p>
   </>
  )
}

export default Cart