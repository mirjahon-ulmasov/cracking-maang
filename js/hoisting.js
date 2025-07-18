/*
Hoisting means variables and function declarations are moved to top of the its scope during compile phase before execution
*/

sayHi() // ✅

function sayHi() {
    console.log('hi')
}

sayHi2() // ❌ TypeError: sayHi2 is not a function

var sayHi2 = function() {
    console.log('hi 2')
}

console.log(a) // undefined (var is hoisted, but initialized with undefined)
var a = 5

console.log(b) // ❌ ReferenceError (let/const is hoisted, but not initialized)
// ❌ TDZ (Temporal Dead Zone)
let b = 3

// Both var and function is hoisted - but function declarations are hoisted before variables
/*
function foo() {
    console.log('foo')
}
var foo;

foo = 5

foo()
*/
var foo = 5

foo()

function foo() {
    console.log('foo')
}