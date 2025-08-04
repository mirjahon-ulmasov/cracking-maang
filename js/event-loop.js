
// ------------- Microtask -------------
// It's not stack overflow, Event Loop startvation
/*
function loop() {
    Promise.resolve().then(() => {
        console.log('Microtask loop') // It never ends
        loop()
    })
}

loop()

setTimeout(() => {
    console.log('Macrotask') // It never runs
}, 0)
*/

// ------------- Macrotask -------------
// It does not freeze browser
/*
function loop2() {
    setTimeout(() => {
        console.log('Macrotask loop')
        loop2()
    }, 0)
}

loop2()

setTimeout(() => {
    console.log('Another macrotask')
}, 0)
*/

function repeat() {
    setTimeout(() => {
        console.log('Macrotask')

        Promise.resolve().then(() => {
            console.log('Microtask inside macrotask')

            setTimeout(() => {
                console.log('Macrotask inside microtask that inside another macrotask')
            }, 2000)
        })

        repeat()
    }, 1000)
}

repeat()
// 1) Take task from macrotask queue (setTimeout)
// 2) Run all sync code
// 3) Run all microtasks
// 4) Move next macrotasks