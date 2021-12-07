const http = require('http')
const url = require('url')
const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.end("hello francis")
})
server.listen(9000,'127.0.0.1:9000',()=>{
    console.log("this is a server")
})
