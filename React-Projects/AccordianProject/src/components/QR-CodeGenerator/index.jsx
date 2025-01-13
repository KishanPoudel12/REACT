import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import './style.css'
function QrCodeGenerator() {
  const [qrCode,setQrCode]=useState('')
  const [input,setInput]=useState('')
  return (
    <>
      <h1>QrCode Generator</h1>
      <input type="text"  onChange={(e)=>setInput(e.target.value)} value={input} />
      <button  disabled={input && input.trim() !== '' ? false : true} className='generateQr' placeholder='Enter Your value' onClick={()=>{
        setQrCode(input) 
        setInput('')}}
         >Generate</button>
      <QRCode
      id='qr-code-generator'
      value={qrCode}
      />
      {/* <p>{qrCode ?  `The QR code for ${input} is `: null}</p> */}
    </>
  )
}

export default QrCodeGenerator