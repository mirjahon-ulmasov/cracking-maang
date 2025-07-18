/*
Scope is defined where variables are accessible in your code

1) Global Scope: accessible in everywhere
2) Function Scope: accessible inside a function
3) Block Scope: (let, const) accessible inside a {}

*/

let a = 2

function test() {
    let b = 3
    if (true) {
        let c = 4
        console.log(a) // global scope
        console.log(b) // function scope
        console.log(c) // block scope
    }
    // console.log(c) // ReferenceError
}

test()

// console.log(b) // ReferenceError
