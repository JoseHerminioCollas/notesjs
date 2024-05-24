// let a = [25, 5, 52, 3, 4, 44, 24, 44, 52]
let b = [
    [0, 0, 1],
    [1, 0, 0],
    [1, 1, 1]
]

function isVW () {
    let isW
    for (let i = 0; i < b.length; i++) {
        isW = true
        for (let j = 1; j < b.length; j++) {
            console.log('j', b[0][i], b[j][i])
            if (b[0][i] !== b[j][i]) {
                console.log('xxx')
                isW = false
            }
        }
        if (isW) return true
    }
    return false
}

console.log('cbbxx', isVW())

function Note () { return 1 }
module.exports = Note
