const fs=require('fs')

//fs.writeFile('filename','data to be added in string' and 3param iS callback function with error parameter if an error encounted whike writing in file)
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