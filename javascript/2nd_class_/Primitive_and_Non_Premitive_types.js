let currentDate = new Date
console.log('currentDate', currentDate)

//RegExp : Represents a regular Expression for pattern matching

let regex = /[a-zA-Z]/
let str1 = '21323a'
console.log('regex', regex.test(str1))

let regex2 = /[00000-0000000-0]/
let str2 = '3830113871171'
console.log('regex is CNIC', regex2.test(str2))

let regexEmail = /[a-zA-Z@.com]/
let email = 'pakhacker'
console.log('regex is Email', regexEmail.test(email))

let obj1 = { name: 'Alice' }
let obj2 = obj1
console.log('result', obj1.obj2)

console.log('Values', typeof (obj1))
console.log('Values', typeof (obj2))


console.log('-------------')


let a = 88
let b = a
a = 33
console.log('a', a)
console.log('b', b)

// = assignment operator
// == values operator
// === type check operator