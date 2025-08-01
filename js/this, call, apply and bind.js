// In JavaScript, the this keyword refers to the context in which a function is executed.
// Its value defined by how function is called, not where it is defined

function showThis() {
    console.log(this) // window, global
}
showThis()

// -------------------------------------

const person = {
    name: "Mirjahon",
    showName: function () {
        console.log(this.name) // Mirjahon
    },
    showNameArrow: () => {
        console.log(this.name) // undefined
    },
}
person.showName()
// person.showNameArrow()

// -------------------------------------

function greet() {
    console.log("Hi " + this.name) // Hi Mirjahon
}
greet.call(person)

// -------------------------------------

function sayHi() {
    console.log(this.name)
}

const user = {
    name: "Mirjahon",
    sayHi,
}

const admin = {
    name: "Ulmasov",
    sayHi,
}

user.sayHi() // Mirjahon
admin.sayHi() // Ulmasov
sayHi() // undefined

// -------------------------------------

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i) // After 1 second, it outputs 3, 3, 3
    }, 1000)
}
// var is function-scoped, so there's only one shared i

// -------------------------------------

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i) // After 1 second, it outputs 0, 1, 2
    }, 1000)
}
{
    let i = 0
    setTimeout(() => console.log(i), 1000)
}
{
    let i = 1
    setTimeout(() => console.log(i), 1000)
}
{
    let i = 2
    setTimeout(() => console.log(i), 1000)
}
// with let, each loop iteration creates its own block scope

// -------------------------------------

const a = { value: 10 }
const b = a
b.value = 20

console.log(a.value) // → 20
// a and b refer to same object in memory, so changing b.value is same changed a.value
// we are not copying object, we are copying reference to it

// -------------------------------------

{
    let x = { value: 1 }
    let y = { value: 1 }

    console.log(x === y) // false
}

{
    let x = { value: 1 }
    let y = x
    console.log(x === y) // true
}

/*
Arrow functions in JavaScript do not have their own this binding.
Instead, they lexically inherit the this value from their surrounding scope at the time they are defined.
*/

// -------------------------------------

{
    const user = {
        name: "Mirjahon",
        sayHi() {
            const arrow = () => {
                console.log("Hi, I'm " + this.name)
            }
            arrow()
        },
    }

    user.sayHi()

    /*
    This logs Hi Mirjahon, because the arrow function inherits this from its lexical parent - which is sayHi method
    in sayHi method, this refers to user object, so when arrow function run it uses same this
    */
}

// -------------------------------------

{
    const user = {
        name: "Mirjahon",
        sayHi: function () {
            console.log("Hi, I'm " + this.name)
        },
    }

    const greet = user.sayHi
    greet() // Hi, I'm undefined

    /*
    when we assing user.sayHi to variable, call greet() we lose binding to user, it become a plain function

    const greet = user.sayHi.bind(user)
    greet() // Hi, I'm Mirjahon

    */
}
