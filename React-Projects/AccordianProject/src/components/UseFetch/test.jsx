import React from 'react'
import { UseFetch } from './UseFetch'
function Test() {
  const {data ,error ,loading} =UseFetch("https://dummyjson.com/products",{})
  console.log("error", error , "data=",data ,"Pending",loading)
  return (
    <div>
      <p>Fetch API Hook</p>
      <div className='itemList'>
        {
          error ? <div> Error :: {error}</div> : null
        }
        {
          loading ? <div>Loading Please Wait</div> : null
        }
        {
          data.map(item=><p key={item.title}>{item.title}</p>)
        }
      </div>
    </div>
  )
}
export default Test