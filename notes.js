
const r = (n) => {
    if (n < 3) {
        return n
    }
    r(n - 1)
    console.log(n)
}
const a = r(6)
console.log('note', a)
