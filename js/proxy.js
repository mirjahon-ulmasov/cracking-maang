// ✅ Proxy is built-in object in JavaScript that lets you customize the behavior of another object when
/*
- getting property
- setting property
- deleting property
- calling function
- checking existence (with in)
*/

// const user = {}

// const proxy = new Proxy(user, {
//     set(obj, prop, value) {
//         if (typeof value == "string") {
//             obj[prop] = value.trim()
//             return true
//         } else {
//             console.log('only strings are allowed')
//             return false
//         }
//     },
// })

// proxy.username = '           Mirjahon          '
// proxy.age = 25

// console.log(user)

// ✅ -------------- Framework reactivity --------------
// function reactive(obj) {
//     return new Proxy(obj, {
//         get(target, prop) {
//             return target[prop]
//         },
//         set(target, prop, value) {
//             target[prop] = value
//             return true
//         }
//     })
// }

// const state = reactive({ count: 0 })

// state.count++
// console.log(state.count)

// ✅ -------------- Block delete --------------
// const obj = new Proxy({ a: 1, _a: 2 }, {
//     deleteProperty(target, prop) {
//         if(prop.startsWith('_')) {
//             console.log(`Blocked delete on ${prop}`)
//             return false
//         } else {
//             Reflect.deleteProperty(target, prop)
//         }
//     }
// })

// delete obj.a
// delete obj._a

// ✅ -------------- Detect in operator ----------
const user = new Proxy({}, {
    has: () => false
});
  
console.log('name' in user); // → false

// ✅ ------------ Auto-default fallback ---------
// const user = new Proxy({}, {
//     get(target, prop) {
//         return prop in target ? target[prop] : 'N/A'
//     }
// })

// console.log(user.hello) // N/A

// ✅ Proxy is built-in object that helps to control how objects behaves, 
// add custom logic, like validation, logging, reactivity, restrict