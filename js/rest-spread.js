// In JavaScript, spread and rest both use same syntax ...

// ------- Rest parameter -------
// Collects multiple elements into single element

// Function Parameters: To accept a variable number of arguments.
// Array/Object Destructuring: To capture remaining elements or properties.

// 1) Rest with function parameters
function printArguments(h1, ...theArguments) {
    console.log(h1, theArguments) // 'h1', [ 'h2', 'h3' ]
    console.log(arguments) // { '0': 'h1', '1': 'h2', '2': 'h3' }
}

printArguments("h1", "h2", "h3")

// 2) Rest in array destructuring
const [first, ...remaining] = [10, 20, 30, 40]
console.log(first) // 10
console.log(remaining) // [20, 30, 40]

// 3) Rest in object destructuring
const { a, ...others } = { a: 1, b: 2, c: 3 }
console.log(a) // 1
console.log(others) // { b: 2, c: 3 }

// ------- Spread operator -------
// Spreads the elements of an iterable (like an array or object) into individual elements.

// Use Cases:
// Array: To combine arrays, copy arrays, or expand an array’s elements.
// Object: To combine or clone objects.

// 1) Spread with arrays
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combined = [...arr1, ...arr2] // [1, 2, 3, 4, 5, 6]

// 2) Spread in function arguments
function sum(x, y, z) {
    return x + y + z
}
const nums = [1, 2, 3]
console.log(sum(...nums)) // 6

// 3) Spread with objects
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }
const combinedObj = { ...obj1, ...obj2 } // { a: 1, b: 3, c: 4 }

// Ex: 1
const team = {
    name: "Liberty",
    coach: "David",
    players: ["Marge", "Aiden", "Hervert", "Sherry"],
}

const printTeamRest = (teamName, coach, ...players) => {
    // Rest
    console.log(`Team: ${teamName}`)
    console.log(`Coach: ${coach}`)
    console.log(`Players: ${players.join(", ")}`)
}
printTeamRest(team.name, team.coach, "", ...team.players) // Spread

// Ex: 2
const fruits = ["apple", "banana"]
const veggies = ["cucumber", "potato"]

// Spread operator
const food = ["grapes", ...fruits, ...veggies]
// -> ["grapes", "apple", "banana", "cucumber", "potato"]

// Rest parameters
const [fav, ...otherFoods] = food
console.log(fav) // => grapes
console.log(otherFoods) // => [ 'apple', 'banana', 'cucumber', 'potato' ]
