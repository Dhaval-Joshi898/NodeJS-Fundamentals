//Creating a Server Using NodeJS

//Step 1 Import http library/module
var http=require("http")


//Step 2. Create a Server
const server=http.createServer((req,res)=>{   //createServer return a instance of server ,therefore it needs to be stored in variable 
    //Here comes the req/response       
    res.end('HEllo welcome to the server')
})


//Step 3. Specify a port number to listen to Client's Request

server.listen(3000,()=>{  
  console.log("Server listening on port 3001")  
}) //the other parameter after port number(3000) is a callback function ,and this callback function will be executed when server has started to listen