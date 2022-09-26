const fs=require('fs')

const read=fs.readFileSync("./content/First.txt","utf-8")  
console.log(read)

fs.writeFileSync("./content/subfolder/second.txt",read,{flag:"a"})