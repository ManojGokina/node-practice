const http = require('http');
const data = require("./second");
const fs = require("fs");

const hostname = '127.0.0.1'
const port = 5000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('Hello World')
})

server.listen(port , hostname , ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`)
})


var a = 20 ;
var b = 30 ;
var c = 50 ;

console.log(a+b+c);
console.log(__dirname);
fs.writeFileSync("code.txt", "This is a new code file")


console.log("nodemon manoj 12334" , data)