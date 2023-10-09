//Since JS is a single thread it will execute line by line
for(let i=0 ;i<=10000000000;i++){
    //Here this doing nothing it is JUST consuming time
}

console.log('Task to be performed after the loop')

console.log("It has to wait for so long to finish the loop")