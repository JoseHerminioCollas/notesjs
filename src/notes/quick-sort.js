/* eslint no-param-reassign: "off" */
/* eslint no-console: ["error", { allow: ["log", "error"] }] */
function swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
function partition(arr, pivotI, leftI, rightI) {
    let partitionI = leftI
    for (let i = leftI; i < rightI; i += 1) {
        if (arr[i] < arr[pivotI]) {
            swap(arr, i, partitionI)
            partitionI += 1
        }
        console.log(i)
    }
    console.log('x', arr[rightI], partitionI)
    swap(arr, rightI, partitionI) // rightI is set in quickSort
    return partitionI
}
function quickSort(arr, leftI, rightI) {
    // console.log('quick sort', leftI, rightI)
    if (leftI < rightI) {
        const pivotI = rightI
        const partitionIndex = partition(arr, pivotI, leftI, rightI)
        // console.log('a', leftI, rightI, partitionIndex, qSArr)
        // sort left and right
        quickSort(arr, leftI, partitionIndex - 1)
        // console.log('b: ', left, right, partitionIndex)
        quickSort(arr, partitionIndex + 1, rightI)
        // console.log('c', left, right, partitionIndex)
    }
    return arr
}

module.exports = [quickSort]
