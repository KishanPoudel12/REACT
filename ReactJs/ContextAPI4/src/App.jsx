import React from 'react'
import Item from './components/item'
import Cart from './components/cart'
function App() {
  return (
  <>
  <Item  name='Ipods Pro' price={50}/>
  <Item  name='Ipen Pro' price={500}/>
  <Item  name='Iphone Pro' price={5000}/>
  <Item  name='MacBook Pro' price={50000}/>
  <br />
  <Cart/> 
  </>
  )
}

export default App