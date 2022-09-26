const {readFile,writeFile}=require('fs')
readFile("./content/First.txt","utf-8",(err,result)=>{
    if(err){
        console.log(err)
        return

    }
    const first=result
    readFile("./content/subfolder/second.txt","utf-8",(err,result)=>{
        if(err){
            console.log(err)
            return
    
        }
        const second=result
    writeFile("./content/third.txt",`These are the contents:${first}and${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
    })
    })

})