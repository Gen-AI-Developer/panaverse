//primitive and NON primitive mean regerence types.
//primitive types: String, Number, Boolean, Undefined,
//Null

let num = 234
var sss = 234
const aaa = 234


let str = 'string value'
let st3 = "string value"
var sss = 'string value'
var sss
console.log(sss)
const vvv = 'string value'

let nulvalue = true
let nullf = false

let a
let be = null
let co = null

// NOn Primitive types : Object, Array Function.

//Primitive data types are immutable,
//store single values, do not have methods,
//cannot be shared, and have default values
//when not assigned.

//Non-primitive data types
//are mutable, store multiple values, have
//pre-defined methods, can be shared, and
//their default value is null when not assigned.
//
//
//

let a1 = 10
a = 20
console.log(a)
console.log('----------------------------------------')




let num1 = 10
let num2 = num1
num1 = 20

console.log(num1)
console.log(num2)
console.log('----------------------------------------')
let person = {
    name: "Safdar Ali Shah",
    age: 20,
    country: 'USA'

}

let student = {
    name: 'safar',
    class: 'AI',
    address: 'Shami Road',
    CNIC: '38301-133303303-1'
}



let OFFice = {
    employe: 'Safdar',
    emid: '45412',
    embrach: 'teacher',
    CNIC: '2343434-444-44'
}
var variable = 123
typeof (a)

console.log('----------------------------------------')

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr)

arr.push(6)
arr.unshift(6)
console.log(arr)

arr.pop()

arr.slice(0, 2)
console.log(arr.slice(2, 2))
console.log(arr[456])
console.log(arr.length)