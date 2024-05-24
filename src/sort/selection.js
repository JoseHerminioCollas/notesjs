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

/*
for (let i = 0; i < arr.length; i++) {
    let minI = i
    for (let j = i; j < arr.length; j++) {
        if (arr[minI] > arr[j]) {
            minI = j
        }
    }
    console.log('x-', arr[i], i)
    const t = arr[i]
    arr[i] = arr[minI]
    arr[minI] = t
}

*/
