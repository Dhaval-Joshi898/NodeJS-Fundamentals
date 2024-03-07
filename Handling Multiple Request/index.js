const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req.url)    //req is object and url is the property of 'req' object

    if(req.url==='/user'){  //if in url it is mentioned 8000/user then send this below response
       return res.end("\n Welcome to User URL page REQUEST")
       
    }
    else if(req.url=='/product'){
        res.end(" Welcome to Product URL page REQUEST")
    }
   
})

server.listen(8000,()=>{
    console.log("Server Running on port 8000")
})