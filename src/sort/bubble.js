var a = [34, 203, 3, 746, 200, 984, 198, 764, 9]

function bubbleSort (items) {
    var length = items.length
    for (var i = (length - 1); i >= 0; i--) {
        // Number of passes
        for (var j = (length - i); j > 0; j--) {
            // Compare the adjacent positions
            if (items[j] < items[j - 1]) {
                // Swap the numbers
                var tmp = items[j]
                items[j] = items[j - 1]
                items[j - 1] = tmp
            }
        }
    }
}

function bubbleSort2 (a) {
    var swapped
    do {
        swapped = false
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i] > a[i + 1]) {
                var temp = a[i]
                a[i] = a[i + 1]
                a[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}

bubbleSort(a)
bubbleSort2(a)
console.log(a)
