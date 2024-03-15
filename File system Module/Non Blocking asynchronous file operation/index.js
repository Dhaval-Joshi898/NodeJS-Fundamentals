const fs=require('fs')

fs.writeFile('text.txt','The content is written using writeFIle',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Data has been written on file")
    }
})
fs.readFile('text.js',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})