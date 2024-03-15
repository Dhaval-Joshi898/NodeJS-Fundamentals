const fs=require('fs')

//fs.writeFile('fileName','data to be added in string' and 3param iS callback function with error parameter if an error encounted whike writing in file)
fs.writeFile('text.txt','The content is written using writeFIle',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Data has been written on file")
    }
})

//fs.readFile('fileName',a callback function (err,buffer) with 2 params buffer is the data we get from file we need to convert it to string)
fs.readFile('text.txt',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())  //converting buffer data  to string  
    }
})

fs.appendFile('text.txt',' This data has been appended using appendFile',(err)=>{
    if(err){
        console.log("Data has not been appended to the file",err)
    }
    else{
        console.log("Data has  been appended to the file")
    }
})
