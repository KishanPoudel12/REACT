import React ,{useEffect, useState}from 'react'
function AutoComplete() {
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false)
  const [users,setUsers]=useState([])
  const [searchName,setSearchName]=useState('')
  const [filteredUsers,setFilteredUsers]=useState([])
  const [showFilteredUsers,setShowFilteredUsers]=useState(false)
  async function fetchApi(){
    try{
      setLoading(true)
      const res= await fetch('https://dummyjson.com/users')
      const data=await res.json()

      if(data){
        setLoading(false)
        setUsers(data.users.map(item=>item.firstName))
      }
    }catch(error){
      setLoading(false)
      setError(error.message)
    }
  }

  useEffect(()=>{
    fetchApi()
  },[])

  if(loading){
    return <h1>Loading ! Please Wait</h1>
  }

  if(error){
    return <h1>Error : {error}</h1>
  }

  function handleChange(event){
    const query=event.target.value.toLowerCase()
    setSearchName(query)
    console.log(query)
    if(query.length){
      const filteredContent= users&&users.length ?       
      users.filter((item)=>item.toLowerCase().indexOf(query) > -1)
      :[]

      setFilteredUsers(filteredContent)
      setShowFilteredUsers(true)
    }else{
      setShowFilteredUsers(false)
    }
  }
  function handleClick(e){
    console.log(e.target.innerText)
    setSearchName(e.target.innerText)
    setShowFilteredUsers(false)
  }
  console.log(users)
  return (
    <div className='container'>
      <div className='search-content'>
          <input type="text"  placeholder='Search User here'  value={searchName} onChange={handleChange}/>
      </div>
      <div className='display-content'>
      {
        filteredUsers && filteredUsers.length && showFilteredUsers ?
        filteredUsers.map((item,ind)=><p onClick={handleClick} key={ind}>{item}</p>)
        :null
      }
      </div>
    </div>
  )
}

export default AutoComplete