import React, { useEffect, useState } from 'react'
import './style.css'
function LoadMore() {
  const [products,setProducts]=useState([])
  const [loading,setLoading]=useState(false)
  const [count,setCount]=useState(0)
  const [error,setError]=useState(null)
  const [disable,setDisable]=useState(false)

  async function fetchProducts(){
    try{
      setLoading(true)
      const response=await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20 }`)
      const  result=await response.json()

      console.log("Initial data=",result.products)
      if(result && result.products && result.products.length){
        setLoading(false)
        setProducts(()=>[...products,...result.products])
        console.log( "Products after fetcing data=",products);
      }
      if(loading){
        return <h1>Loading Data ! Please Wait</h1>
      }
      
    }catch(error){
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(()=>{
    setDisable(products && products.length===100 ? true :false)
  },[products])
  useEffect(()=>{
    fetchProducts()
  },[count])


  if(error){
    return <h1>Error :{error}</h1>
  }

  console.log(count)
  return (
    <div className='container'>
      <p>Kishan Store</p>
      <div className='product'>
      {
        products&& products.length ?
        products.map((item,ind)=>{
          return <div  key={ind}>
              <img 
              className='product-img'
              src={item.thumbnail}
              alt={item.title}
               />
               <p className='product-title'>{item.title}</p>
               <p className='product-price'>${item.price}</p>
          </div>
        })
        : null
      }
      </div>
      <div className='loadMore-btn'>
        <button className='btn' disabled={disable} onClick={()=>setCount(count+1)}> Load More Button </button>
      </div>
    </div>
  )
}

export default LoadMore