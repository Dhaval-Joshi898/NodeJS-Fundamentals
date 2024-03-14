// Step:1 Import readline module
const readLine=require('readline')

//Step 2 Configure interface toconnect with terminal/command line
const qinterface=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

//STEP 3 Reading values
qinterface.question("Enter the first number:",(num1)=>{
    qinterface.question("Enter the second number:",(num2)=>{
            //num1 and num2 value we have now [when user enter first number then only second callback will work and tak eseocnd number]
            let sum=Number(num1)+Number(num2)
            console.log(`The sum of two numbers is ${sum}`)
    })
})

//https://chat.openai.com/c/244a8bc8-9180-443b-b09e-7676308566d1 
//The above is the chatgpt link to understand readline concept properly 