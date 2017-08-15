let a = [
    [0, 1, 0],
    [0, 1, 0],
    [1, 0, 0]
]
function cWH () { // check win horiz
    return a.some(x => {
        return x.every(y => x[0] === y)
    })
}
function cWV () {
    let isW
    for (let i = 0; i < a[0].length; i++) {
        isW = true
        for (let j = 1; j < a.length; j++) {
            console.log(i, a[0][i], a[j][i])
            if (a[0][i] !== a[j][i]) {
                console.log('xx')
                isW = false
            }
        }
        if (isW) return true
    }
    return false
}
console.log('z', cWV())

function Note () { return 1 }
module.exports = Note
