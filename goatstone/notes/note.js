
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
// console.log('t',es)
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
