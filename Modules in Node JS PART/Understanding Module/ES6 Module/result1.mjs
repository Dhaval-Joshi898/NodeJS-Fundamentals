import * as arithmaticModule from './arithmatic1.mjs'  //here we use arithmaticModule as a object name to access property like add function
import {multiply} from './arithmatic1.mjs'
//we can also directly import function name,class or variables by directly importing them inside this curly brackets {}

console.log("import * as arithmaticModule from './arithmatic1.mjs' ")
console.log('arithmaticModule.add(2,4)---->',arithmaticModule.add(2,4))

console.log('-----------------------------------------------------------------')
console.log("import {multiply} from './arithmatic1.mjs'")
console.log('multiply(2,4)---->',multiply(2,4))