let a = [4, 3, 6, 2, 3, 55, 33, 2, 4]

function pFunc (n) {
    let count = 0
    for (let i = 2; i <= n; i++) {
        if (isP(i)){
            console.log('===', i)
            count++
        }
    }
    return count
}

let ps = [2]
function isP (n) {
    console.log('---', n, ps)
    if (ps.includes(n)){
        console.log('i', ps)
        return true
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false
    }
    ps.push(n)
    return true
}
// pFunc(11)
console.log('x', pFunc(21))
console.log('x', pFunc(15))
console.log('x', pFunc(5))

function Note () { return 1 }
module.exports = Note
