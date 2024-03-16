const fs=require('fs')

//fs.writeFile('fileName','data to be added in string' and 3param iS callback function with error parameter if an error encounted while writing in file)
fs.writeFile('text.txt','The content is written using writeIle',(err)=>{
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

// fs.appendFile('fileName','data to be added in string' and 3param iS callback function with error parameter if an error encounted while appending data in file
fs.appendFile('text.txt',' This data has been appended using appendFile',(err)=>{
    if(err){
        console.log("Data has not been appended to the file",err)
    }
    else{
        console.log("Data has  been appended to the file")
    }
})

fs.unlink('text.js',(err)=>{
    err? console.log(err):console.log('The file has been deleted')
    // same like this:
    // if(err){
    //     console.log(err)
    // }
    // else{
    //     console.log('The file has been deleted')
    // same like this
    // }
})
// here if i run this all are asynchronous operation WHOEVER task is finished console first There is not fixed sequence of running
//if i run this it will first delete the file which was there text.js

//in this sequence which is not fixed
//The file has been deleted
// Data has been written on file
// Data has  been appended to the file
// The content is written using writeFIle