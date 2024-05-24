let a = 'aabsdfajddlskjassssaaffdgfdg'

let b = Array.from(a)

for (let i = b.length - 1; i >= 0; i--) {
    if (b[i][0] === b[i - 1]) {
        b[i - 1] = b[i].concat(b[i - 1])
        b.splice(i, 1)
    }
}
const c = b.reduce((p, c, i, arr) => {
    let s = c
    if (c.length > 1) {
        s = c.length + c[0]
    }
    return p + s
}, '')

// console.log('---', b)
console.log('---', c)
