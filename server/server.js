
const http = require('http');

const server  =http.createServer((req,res)=>{
    res.end("hello my name is falano")
})


const port = 8080;

server.listen(port, ()=>{
    console.log("Server listening in port 8000")
})