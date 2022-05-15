const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');
console.log(dirPath)

// Creating file in loop

for(i=0;i<5;i++){
    fs.writeFileSync(dirPath+`/newFile${i}.txt`, 'This is simple text file')
}

// Reading the files directory

fs.readdir(dirPath , (err , files)=>{
    console.warn(files)

    files.forEach((item)=>{
      console.log(item)
    })
})