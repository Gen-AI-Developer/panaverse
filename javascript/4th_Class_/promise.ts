// promises are objects representing the eventual copletion or
// failure of an asymnchronous operation.
// they allow you to handle async code in a more elegant and readable
// way by providing a cleaner syntax for chaining async
// operations and handling their results or errors.


// resolve and reject are callback function provided by the promise
// constructor to indicate the outcome of the async operation.
// when the operation in successful, you call resolve() with the
// result value, and when it encounters an error,
// you call reject() with the error value, these functions allow you to
// control the state of the promise and determine whether it
// resolves() of reject()

//Note: promise body is executed sync and resolve reject will execute async.

// Note: Body of a async function execute sync and only the await part is async
// executed.
// // A promise has 3 states pending, resolve, reject
// let promise = new Promise((resolve, reject) => {
//     console.log("this is a promise")
//     // resolve('Resovle')
//     // reject('Promise Rejected')
// })
// promise.then((result) => {
//     console.log("Then : ", result)
// }).catch((error) => {
//     console.log("Error : ", error)
// }).finally(() => {
//     console.log("Finally")
// })

function doSomethingAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() < 0.5
            if (isSuccess) {
                resolve("Success: Data Fetch Successfully.")
            }
            else {
                reject(new Error('Failed to fetch data'))
            }
        }, 2000);
    })
}
doSomethingAsync().then((result) => {
    console.log("PROMISE: RESOLVED: ", result)
}).catch((error) => {
    console.log("PROMISE: REJECT: ", error)
}).finally(() => {
    console.log("FINALLY EXECUTED")
})

function get_user_data(data:number):Promise<void>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("User Data: ", data)
        }, 2000);
    })
}
