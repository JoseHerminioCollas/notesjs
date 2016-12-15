var permArr = [] //  a
var usedChars = []
function permute (input) {
    var i, ch
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0]
        usedChars.push(ch)
        if (input.length === 0) {
            permArr.push(usedChars.slice())
        }
        permute(input)
        input.splice(i, 0, ch)
        usedChars.pop()
    }
    return permArr

let es = []
let n = 12
let done = false
while (!done) {
    const nArr = Array.from(String(n))
    let d = Array(nArr.length).fill(0) // d divisor
    d[0] = nArr[0]
    es.push(d)
    let r = n / parseInt(d.join(''), 10) // r remainder
    // n =
    console.log(nArr, d, r)
    done = true
}
console.log(JSON.stringify(permute([5, 3, 7, 1])))
