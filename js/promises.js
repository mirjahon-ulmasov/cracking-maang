/*
Promise is a Javascript object that represents the result of asynchronous operations.
It can be one of the 3 states: pending, fulfilled, rejected
*/

/* ---------------
State of promise can change only only once. 
It returns one of them, either resolve or reject. (NOT BOTH!!!)
---------------
*/

/* ---------------
resolve() and reject() can take only one argument (or none), others get ignored
---------------
*/
const promise = new Promise(function (resolve, reject) {
    resolve("Success")
    reject(new Error("Error")) // it ignores
})

/* ---------------
We can pass both onFullfilled & onRejected functions into then(),
or we pass only onFullfilled into then(), and onRejected into catch()
---------------
*/

// --------------------- 1. ---------------------
// promise.then(
//     function onFulfill(result) {
//         console.log(result)
//     },
//     function onReject(error) {
//         console.log(error)
//     }
// )

// --------------------- 2. ---------------------
// promise
//     .then(function onFullfilled(result) {
//         console.log(result)
//     })
//     .then(null, function onRejected(error) {
//         console.log(error)
//     })

// --------------------- 3. ---------------------
// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

/*
------------
finally() mainly uses for clean up
It is same: finally() == .then(f, f)
------------
*/

// new Promise((resolve, reject) => {
//     resolve(10)
// })
//     .finally(() => console.log("Promise finished"))
//     .then(result => console.log(result))

/*
------------
finally() does not take argument, and should not return anything (if returns it just ignores). 
There is exception if it throws and Error, then it go catch.
------------
*/

new Promise(resolve => {
    resolve(10)
})
    .finally(() => console.log("clean up"))
    .finally(() => {
        throw new Error("Error")
    })
    .then(result => console.log(result))
    .catch(error => console.log(error))

// clean up
// Error
