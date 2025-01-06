import React from 'react'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

function Item(props) {
  const hello=useContext(CartContext)
  console.log(hello)
  return (
    <>
    <div>{props.name}</div>
    <div>{props.price}</div>
     <button className='bg-green-500' onClick={()=> hello.setItem( [...hello.item,{name:props.name,price:props.price}] )}>Add to cart</button>
    </>
  )
}
export default Item