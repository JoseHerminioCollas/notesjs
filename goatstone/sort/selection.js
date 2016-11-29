import 'babel-polyfill'

var a = [55, 22, 1, 2, 4, 5, 7, 6, 55, 111]
a = a.concat(a, a, a, a, a)
function* b () {
    for (var i = 0; i < a.length; i++) {
        var minI = i
        for (var j = i + 1; j < a.length; j++) {
            if (a[minI] > a[j]) {
                minI = j
            }
        }
        var t = a[i]
        a[i] = a[minI]
        a[minI] = t
        yield [ a[i], a ]
    }
}

module.exports = b
