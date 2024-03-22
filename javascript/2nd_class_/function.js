function _greet(Name = 'Azhar') {
    console.log('Name Type is =', typeof (Name))
    console.log(`Hello, ${Name}`)
}
_greet('Safdar Ali Shah')
_greet(1000)
_greet(1000.1)
_greet(false)
_greet(Object)
_greet([1, 2, 3, 4, 5, 6])
_greet({
    'key': "value"
})
console.log('---------------')
_greet(_greet('Safdar'))
_greet(typeof (_greet))

function sum(age, ...number) {
    console.log('age', age)
    return number.reduce((a, b) => a + b, 0)
}
//console.log(sum(1, 2))
//console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4, 5))