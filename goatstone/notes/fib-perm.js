// total perimiter of squares
function* fib () {
    let p = 1 // penultimate
    let u = 1 // ultimate
    yield p
    yield u
    while (true) {
        let t = u
        u = u + p
        yield u
        p = t
    }
}
function perimeter (n) {
    let f = fib()
    let total = 0
    for (let i = 0; i <= n; i++) {
        let fibN = f.next()
        total += fibN.value * 4
    }
    return total
}
let s = perimeter(0)
console.log('x', s)
