import React,{useState,useCallback,useEffect,useRef} from 'react'
function App() {
  const [range,setRange]=useState(5)
  const [Password,setPassword] = useState("")
  const [num,setNum]=useState(false)
  const [char,setChar]=useState(false)
  
const generatePassword =useCallback(()=>{
  let pass=''
  let strSet=[...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz']
  if(num)  strSet.push(...'0123456789')
  if(char) strSet.push(...'!@#$%^&*()_+-={}[]:;<,>.?/|')
  
  for(let i=0;i<range;i++){
    const random=Math.floor(Math.random()*strSet.length)
    pass+=strSet[random]
  }
  console.log(pass)
  setPassword(pass)
},[num,char,range,setPassword])

useEffect( ()=>{
  generatePassword()
},[num,char,range,setPassword])


let passRef=useRef(null)

const copyToClipboard=()=>{
  passRef.current?.select()
  window.navigator.clipboard.writeText(Password)
}




  return (
    <>
    <div className='w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-400 bg-gray-700'>
      <h1 className='p-10 font-serif text-2xl  text-orange-300 '>Random Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input type="text" id='me' placeholder='Password'  className='outline-none w-full py-1 px-3 my-3' value={Password} ref={passRef} readOnly/>
          <button className='bg-blue-200 p-2 my-5' onClick={copyToClipboard} >Copy</button>
        </div>
      <div className='flex test-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input type="range"  min={6} max={100} value={range} onChange={(e)=>setRange(e.target.value)} className="range" />
          <label >Length:{range}</label>
        </div>
        <div className=' flex items-center justify-between'>
          <label htmlFor="1" className='p-2'  >Number</label>
          <input  id="1"type="checkbox" value={num}  onChange={()=>setNum((prev) => (!prev))} />
          <label htmlFor="2" className='p-2' >Char</label>
          <input id="2" type="checkbox" value={char}  onChange={()=>setChar((prev)=>(!prev))}/>
        </div>
      </div>
    </div>
    </>
  )
}
export default App