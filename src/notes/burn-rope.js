const a = [
[' ', ' ', ' ', 'R', ' ', ' '],
[' ', ' ', ' ', 'R', ' ', ' '],
[' ', 'R', 'R', 'R', 'R', ' '],
[' ', ' ', ' ', 'R', ' ', ' '],
[' ', ' ', ' ', 'R', ' ', ' ']
]
function burnRope (rope, startPoint) {
    let tt = -1 // totaltime
    let isDone = false

    let tp = startPoint
    let isTPDone = false
    let rp = startPoint
    let isRPDone = false
    let bp = startPoint
    let isBPDone = false
    let lp = startPoint
    let isLPDone = false
    if (startPoint[0] < 0 ||
        startPoint[1] < 0 ||
        !rope[startPoint[0]] ||
        !rope[startPoint[0]][startPoint[1]]) {
        return -1
    }
    while (!isDone) {
        console.log(tp, rp, bp, lp, tt)
        // console.log('curr top', rope[ tp[0] ][ tp[1] ], tt)
        if (tp[0] >= 0 && tp[1] >= 0 &&
            rope[ tp[0] ] &&
            rope[ tp[0] ][ tp[1] ] &&
            rope[ tp[0] ][ tp[1] ] === 'R') {

            console.log('t', rope[ tp[0] ][ tp[1] ])
            tp = [tp[0] - 1, tp[1]]
        } else {
            isTPDone = true
        }
        if (rp[0] >= 0 && rp[1] >= 0 &&
            rope[ rp[0] ] &&
            rope[ rp[0] ][ rp[1] ] &&
            rope[ rp[0] ][ rp[1] ] === 'R') {
            console.log('r')
            rp = [rp[0], rp[1] + 1]
        } else {
            isRPDone = true
        }
        if (bp[0] >= 0 && bp[1] >= 0 &&
            rope[ bp[0] ] &&
            rope[ bp[0] ][ bp[1] ] &&
            rope[ bp[0] ][ bp[1] ] === 'R') {
            console.log('b', bp[0], bp[1])
            console.log('curr b', rope[ bp[0] ][ bp[1] ])
            bp = [bp[0] + 1, bp[1]]
        } else {
            isBPDone = true
        }
        if (lp[0] >= 0 && lp[1] >= 0 &&
            rope[ lp[0] ] &&
            rope[ lp[0] ][ lp[1] ] &&
            rope[ lp[0] ][ lp[1] ] === 'R') {
            console.log('l', lp[0], lp[1])
            console.log('curr l', rope[ lp[0] ][ lp[1] ])
            lp = [lp[0], lp[1] - 1]
        } else {
            isLPDone = true
        }
        isDone = isTPDone && isRPDone && isBPDone && isLPDone
        if (!isDone) {
            tt++
        }
    }
    return tt
}
function Note () {
    console.log('aa', a)
    const r = burnRope(a, [0, 3])
    console.log('r', r)
}
module.exports = Note
