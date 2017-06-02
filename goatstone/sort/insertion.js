var arr = [2, 1, 5, 56, 55, 66, 1, 123, 2, 12]

for (var i = 1; i < arr.length; i++) {
    var v = arr[i]
    for (var j = i - 1; j >= 0, v < arr[j]; j--) {
        arr[j + 1] = arr[j]
    }
    arr[j + 1] = v
}
