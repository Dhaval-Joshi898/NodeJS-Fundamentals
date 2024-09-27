//Since JS is a single thread it will execute line by line
//js is busy in running this below SINGLE THREAD can take single task
for(let i=0 ;i<=10000000000;i++){
    //Here this doing nothing it is JUST consuming time
}

console.log('Task to be performed after the loop')

console.log("It has to wait for so long to finish the loop")


//the below is the example of non blocking code Which does not block the main thread
setTimeout(()=>{
    console.log("After 8 seconds")
},8000)


console.log("It do not have to wait for execution of above setTimeout")
