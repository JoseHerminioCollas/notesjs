let arr = [1, 32, 4, 37, 55, 37, 88, 44, 76, 76, 77, 77]
console.log('aaa', arr)
function cs(a) {
    let ca = Array(Math.max(...a) + 1).fill(0)
    let sa = []
    a.forEach(x => {
        ca[x]++
    })
    ca.forEach((v, i) => {
        sa = sa.concat(new Array(v).fill(i))
    })
    console.log(ca.length, sa)
}
console.log('x', cs(arr))

function Note () { return 1 }
module.exports = Note
