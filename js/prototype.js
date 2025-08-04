/*
✅ In Javascript, every object has a hidden property called [[Prototype]] 
which is reference to another object it inherits from
*/

const person = {
    greet() {
        console.log('Hello')
    }
}

const student = {
    study() {
        console.log('Studying')
    }
}

student.__proto__ = person
student.greet() // inherited from person

// ✅ If a property is not found in object, JS try to find it from prototype chain - or hits null

// ---------------- Constructor functions ----------------
function Animal(name) {
    this.name = name
}

Animal.prototype.speak = function() {
    console.log(this.name + ' makes a sound')
}

const dog = new Animal('Luffy')
dog.speak()

// 1) Created empty object {}
// 2) Sets dog.__proto__ = Animal.prototype
// 3) Animal.call(dog, 'Luffy')
// 4) return dog