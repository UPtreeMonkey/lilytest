"use strict"
// const a = 123
// console.log(a)

const http = require('http')
http.createServer((req,res)=>{
    console.log(req)
    res.end('lili')
    
}).listen(3000)