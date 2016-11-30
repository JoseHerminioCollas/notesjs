import 'babel-polyfill'
const MakeData = require('goatstone/tool/makeData.js')

// var a = [55, 22, 1, 2, 4, 5, 7, 6, 55, 111, 43, 3, 2, 545, 657, 45636, 45, 4]
// a = a.concat(a, a, a, a, a, a, a)

const makeData = new MakeData()
const a = makeData.getArray(350)
// console.log(arr)

function* b () {
    for (var i = 0; i < a.length; i++) {
        var minI = i
        for (var j = i + 1; j < a.length; j++) {
            if (a[minI] > a[j]) {
                minI = j
            }
        }
        yield [ a, i, minI ]
        var t = a[i]
        a[i] = a[minI]
        a[minI] = t
    }
}

module.exports = b
