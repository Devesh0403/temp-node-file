const http=require("http")
const server=http.createServer((req,res)=>{
    if(res.url==="/"){
        res.end("Home page")
    }
    if(res.url==="/about"){
        res.end("About page")
    }
    else{
        res.end("<h1>OOPS</h1>")
    }


})
server.listen(5000)