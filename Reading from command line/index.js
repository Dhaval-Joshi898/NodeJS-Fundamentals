//https://chat.openai.com/c/244a8bc8-9180-443b-b09e-7676308566d1 
//The above is the chatgpt link to understand readline concept properly 
const readLine=require('readline')

const qinterface=readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})
console.log(qinterface)
qinterface.question("Enter the first number:",(num1)=>{
    qinterface.question("Enter the second number:",(num2)=>{
            let sum=Number(num1)+Number(num2)
            console.log(`The sum of two numbers is ${sum}`)
    })
})