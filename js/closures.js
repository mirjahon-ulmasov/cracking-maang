/*
Closure is when inner function has access to the variables and parameters of its outer function, even after outer function is executed. This "remembering" helps even after outer function completes execution and its execution context is removed from call stack, then inner function can still access and manipulate those variables because of closure

1) Global Scope: accessible in everywhere
2) Function Scope: accessible inside a function
3) Block Scope: (let, const) accessible inside a {}

*/

function outer(a) {
    // 1
    let b = 2
    return function inner(c) {
        // 3
        let d = 4
        console.log(a + b + c + d) // 1 + 2 + 3 + 4 = 10
    }
}

const closure = outer(1) // outer function is already executed, and removed from call stack
closure(3)

console.log('----------------- Use Cases -------------------')

// 1) Data Privacy: using closure we can make private variables
function counter() {
    let count = 0

    return {
        increment() {
            count++
            return count
        },
        getValue() {
            console.log(count)
        }
    }

}

const ctr = counter()

ctr.increment()
ctr.getValue()

// Lexical scope
