import 'babel-polyfill'

function* selectionSort (a) {
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

module.exports = selectionSort
