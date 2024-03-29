import abc from "./exportOne.js"
import { bb as c } from "./exportTwo.js"


console.log('a', abc)
console.log('c', c)
//Variable + 
let x
x = 'd'
x = 34
x = true
console.log('Type of X variable', typeof (x))


//union type

let myname: string | null;
myname = "Safar"
myname = null
console.log('myname', myname)

// Type Typing
type RawData = boolean | string | number | undefined;

let a: RawData;
let b: RawData;
let c: RawData;

/// type combine

type id = number | string
type idMaybe = number | string | undefined

/// any type

let myvalue: any
myvalue = true
myvalue = ['safdar', 'ali']
myvalue = 34343
myvalue = (a: number): void => {
    console.log('first', typeof (myvalue))
    return
}

let yourValue: unknown
let hisvalue: never

// infinite loops

function infiniteloop(): never {
    while (true) {

    }
}

function infiniteeloop(): void {
    let a: number = 10
    while (a < 100) {
        console.log('a', a)
    }
}

// Explict Casting  using the as and <> syntax
let myv = (s: string): number => {
    console.log((<string>s).length)
    return (s as string).length
}
myv('safdaralishah')

/// 