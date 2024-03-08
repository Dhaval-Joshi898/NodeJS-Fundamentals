function sum(x,y){
    return x+y
}

function div(x,y){
    return x/y
}

const value=20
//the below is the common way to export function ,class ,variables 
//They are export in form of object
module.exports={
    add:sum,
    divide:div , //here at time of import the property(divide) will be used to access the div function
    value:value
}