// [r][c] is there a win H, V Cross?,
// chang 0 to 1, connect lines, fill flood
// const arr = [3, 4, 11, 77, 33]
const tb = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]

function solve (tb) {
    const tbL = tb.length
    for (let i = 0; i < tbL; i++) {
        console.log(tb[i])
        let isVW = true
        const firstC = tb[0][i]
        if (tb[i].every((c, i, a) => c === a[0])) return true
        for (let j = 0; j < tbL; j++) {
            if (firstC !== tb[j][i]) isVW = false
            console.log(tb[j][i])
        }
        if (isVW) return true
    }
    return false
}
const r = solve(tb)
console.log('is: ', r)
function printB (tttB) {
    for (let i = 0; i < tttB.length; i++) {
        console.log(tttB[i])
    }
}
printB(tb)
// //
function Note () { return 1 }
module.exports = Note
