
// Microtask starvation or Event Loop startvation
// It's not stack overflow
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