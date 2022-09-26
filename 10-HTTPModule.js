const http=require('http')
const server=http.createServer((req,res)=>{
    
    console.log(req)
    res.write("Welcome to the homepage")
    res.end()

    // if(res.url==="/"){
    //     res.end("Home page")
    // }
    // if(res.url==="/about"){
    //     res.end("About page")
    // }
    // res.end(`<h1>OOPS!</h1>`)
})
server.listen(5000)