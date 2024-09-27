const fs=require('fs')

//writeFileSync will write the  data in file mentioned in first PARAMETER if file not exist it will create that file 
// fs.writeFileSync('students.txt',"Name:John Doe   Majors:Computer")   //fs.writeFileSync(filename,content to add -->in string)


// appending the data in the file  if file not there it will also CREATE the file and then append it.
// fs.appendFileSync('students.txt','\nUniversity name:XYZ')


//Delete a file 
fs.unlinkSync('students.txt')

// try{
//     fs.unlink('students.txt')

// }
// catch(err){
//     console.log("Files doesn't exist")   //After deleting file we can write this error  message
// } 

console.log('Another task is performed after the file operation done')