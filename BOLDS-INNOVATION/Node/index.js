// const fs=require("node:fs")
// const data="this is our simple file"

// try{
//   fs.writeFileSync("./hello/samplefile.txt",data)
// }catch(error){
//   console.log(error)
// }
// const http=require('http')
// console.log(http)

// const server = http.createServer((request,response) => {
//   response.setHeader("Content-Type","application/json")
//   response.write("Hello world!")
//   response.statusCode=404
//   response.end("<h2>Hello world !</h2>")
// })

// server.listen(1234,() => {
//   console.log(`Server listening on port :1234`)
// })


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

