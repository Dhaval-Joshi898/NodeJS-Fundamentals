//ES6 module way to export 
//ANy function ,varibales,or class needed to be export just write export before them
export function add(x,y){
    return x+y;
}

function multiply(x,y){
    return x*y;
}

export {multiply} //another way to export inside this {}

//In this way at time of import the multipy function can directly be import inside this {}  and use as it is with name 
// LIKE before we need to use any object like as arithmaticModule form file name and  then  arithmaticModule.multiply
