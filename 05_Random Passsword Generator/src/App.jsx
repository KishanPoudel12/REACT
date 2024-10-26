import React ,{ useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length,setLength]=useState(8)
  const [number,setNumber]=useState(false)
  const [char,setChar]=useState(false)
  const [password,setPassword]=useState("")

  const passwordGenerator= useCallback(()=>{

    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let password =""
    if(password){
      str+=str+="0123456789"
    }
    if(char){
      str+="!@#%^&*()_?/>.<,~"
    }

    for(let i=1;i<=length;i++){
      let  index=Math.floor(Math.random()*str.length +1);
      password += str.charAt(index);
    }
    setPassword(password);
    console.log(password)

  } ,[number,length,char])

// passwordGenerator()  Cannot call this one coz too many rerenders  so we now require useEffect hook 

 useEffect(() => {  passwordGenerator() }, [length,number,char,passwordGenerator]);

//Now to copy the password we need to use another hook called useRef 

const copyPasswordToClipboard=useCallback(()=>{
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,4);
},[password])

const passwordRef=useRef()
  return (
    <div className="w-full max-w-md  mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-400 bg-gray-800">
    <h1 className="text-3xl text-center font-bold text-yellow-400 my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"  className="outline-none w-full py-1 px-3"placeholder="Password" value={password} readOnly ref={passwordRef} />
        <button className='bg-blue-600 text-white' onClick={copyPasswordToClipboard} >COPY</button>
      </div>
      <div className='flex test-sm gap-x-2'>
        <div className="flex items-center gap-x-1">
              <input type="range" min={8} max={50} className="cursor-pointer" value={length} onChange={(e)=>{setLength(e.target.value)}}/*This is to be able to use the range manually  */ />
              <label >Length :{length}  </label>
        </div>
        <div className="flex test-center gap-x-2">
                <span>
                  <input type="checkbox"   onChange={()=>{
                         setNumber((prev)=>!prev)
                  }}/>Numbers
                </span>
                <span>
                  <input type="checkbox"   onChange={()=>{
                     setChar((prev)=>!prev)
                  }} />Characters
                </span>
        </div>
      </div>
    </div>
  )
}
export default App