const http=require('http')

const server=http.createServer((req,res)=>{
    res.end('Learning about NPM and packet Manager and Nodemon,')
})

server.listen(8081)