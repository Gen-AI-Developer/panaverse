import abc from "./exportOne.js";
console.log('a', abc);
console.log('c', c);
//Variable + 
let x;
x = 'd';
x = 34;
x = true;
console.log('Type of X variable', typeof (x));
//union type
let myname;
myname = "Safar";
myname = null;
console.log('myname', myname);
let a;
let b;
let c;
/// any type
let myvalue;
myvalue = true;
myvalue = ['safdar', 'ali'];
myvalue = 34343;
myvalue = (a) => {
    console.log('first', typeof (myvalue));
    return;
};
let yourValue;
let hisvalue;
// infinite loops
function infiniteloop() {
    while (true) {
    }
}
function infiniteeloop() {
    let a = 10;
    while (a < 100) {
        console.log('a', a);
    }
}
// Explict Casting  using the as and <> syntax
let myv = (s) => {
    console.log(s.length);
    return s.length;
};
myv('safdaralishah');
/// 
