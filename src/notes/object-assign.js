
let a = {a: 1}
let b = {b: {a: 3}}
Object.assign(a, {a: 2}, {b})

console.log(a)