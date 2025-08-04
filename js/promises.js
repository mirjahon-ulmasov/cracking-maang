/*
✅ Promise is a Javascript object that represents the result of asynchronous operations.
✅ It can be one of the 3 states: pending, fulfilled, rejected
*/

/* ---------------
✅ State of promise can change only only once. 
✅ It returns one of them, either resolve or reject. (NOT BOTH!!!)
---------------
*/

/* ---------------
✅ resolve() and reject() can take only one argument (or none), others get ignored
---------------
*/
const promise = new Promise(function (resolve, reject) {
    resolve("Success")
    reject(new Error("Error")) // it ignores
})

/* ---------------
✅ We can pass both onFullfilled & onRejected functions into then(),
✅ or we pass only onFullfilled into then(), and onRejected into catch()
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
✅ finally() mainly uses for clean up
✅ It is same: finally() == .then(f, f)
------------
*/

// new Promise((resolve, reject) => {
//     resolve(10)
// })
//     .finally(() => console.log("Promise finished"))
//     .then(result => console.log(result))

/*
------------
✅ finally() does not take argument, and should not return anything (if returns it just ignores). 
✅ There is exception if it throws and Error, then it go catch.
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
    .catch(error => console.log(error.message))

// clean up
// Error

// ✅ a catch() does not stop the chain - it can return value to keep things as a resolved
Promise.resolve("start")
    .then(value => {
        console.log("1: ", value)
        throw new Error("Error")
    })
    .catch(error => {
        console.log("2: ", error.message)
        return "recovered"
    })
    .then(value => console.log("3: ", value))

// ✅ immediately fulfilled
Promise.resolve()

// ✅ immediately rejected
Promise.reject()

// ✅ waits all succeed, or fails if any reject (ALL OR NOTHING)
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2)
]).then(console.log) // [1,2]

// ✅ returns full report of promises (GIVE ME EVERYTHING)
Promise.allSettled([
    Promise.resolve(1),
    Promise.reject("fail"),
]).then(console.log)
// Output: [{ status: 'fulfilled ', value: 1 }, { status: 'rejected', reason: 'fail'} ]

// ✅ returns first finished promise, either fulfilled or rejected (FIRST ONE WINS (even if error))
Promise.race([
    new Promise(res => setTimeout(() => res("A"), 100)),
    new Promise(res => setTimeout(() => res("B"), 50))
]).then(console.log) // B

// ✅ returns first fulfilled promise, ignore rejections (FIRST SUCCESS)
// ✅ If all reject, it throws an AggregateError
Promise.any([
    Promise.reject("fail"),
    Promise.resolve("success")
]).then(console.log) // success