//1 Import fs (FILE SYSTEM) module
const fs=require('fs')

//2 read file synchronous to synchronously read file

//fs.readFileSync("file.txt")  ----> //fs.readFileSync return a buffer

// A buffer is a data structure that represents a chunk of memory. It is commonly used to handle binary data or data in a raw format.

//---OS manages the files ,lets say os read data of file by 5 character per mili seconds and the programming lanh=guages take 3 character per milisecond to 
//  so the 2 characters left is stored in buffer so that the data is not lost if not recieved or read


const buffer=fs.readFileSync("data.txt")
console.log(buffer)  // OP <Buffer 4e 61 6d 65 3a 4a 6f 68 6e 20 44 6f 65 0d 0a 66 69 65 6c 64 20 3a 20 4d 61 72 6b 65 74 69 6e 67 0d 0a>
//to not get data in encoded and fet the original data use .toString() method

console.log(buffer.toString())
//op:--->Name:John Doe      field : Marketing

//if you do not want to do ,toString there is another paramter option of readFileSync (which an ibject with property encoding and value given utf8) will return string data in buffer1
const buffer1=fs.readFileSync('data.txt',{encoding: 'utf8'})
console.log(buffer1)   //op:--->Name:John Doe      field : Marketing