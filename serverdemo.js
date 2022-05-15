const http = require('http');
const data = require('./apidata');
const fs = require('fs');
// const color = require('colors');


// console.log('Hello there'.yellow);
  
http.createServer((req, res)=>{ 
    res.writeHead(200, {'Content-Type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000)

// console.log(process.argv);

const input = process.argv;

// fs.writeFileSync(input[2],input[3])

// creating files

if(input[2] == 'add'){
    fs.writeFileSync(input[3],input[4])
}else if(input[2] == 'remove'){
    fs.unlinkSync(input[3])
}else{
    console.log('invalid input')
}

