//The below is the example of non blocking code
//Hello3 is executing before hello2 because hello2 is at delay of 4 seconds
console.log("Hello1")

setTimeout(()=>{
    console.log('hello2')
},4000)

console.log('HEllo3')