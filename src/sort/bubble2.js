let a = [4, 3, 6, 2, 3, 55, 33, 2, 4]

var isR = true

function strFunc () {
    let isD
    do {
        isD = false
        console.log('a')
        for (let i = 0; i < a.length; i++) {
            if(a[i] > a[i + 1]) {
                swap(i, (i + 1), a)
                isD = true
            }
        }
    }
    while (isD)
}
strFunc()
console.log(a)

function swap (i, j, arr) {
    console.log('swap')
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}
function Note () { return 1 }
module.exports = Note
