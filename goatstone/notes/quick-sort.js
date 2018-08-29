/* eslint no-param-reassign: "off" */
/* eslint no-console: ["error", { allow: ["log", "error"] }] */
function swap(swapArr, i, j) {
    const temp = swapArr[i]
    swapArr[i] = swapArr[j]
    swapArr[j] = temp
}
function partition(pArr, pivotIndex, left, right) {
    console.log('partition: ', left, right)
    const pivotValue = pArr[pivotIndex]
    let partitionIndex = left
    for (let i = left; i < right; i += 1) {
        if (pArr[i] < pivotValue) {
            swap(pArr, i, partitionIndex)
            partitionIndex += 1
        }
    }
    swap(pArr, right, partitionIndex)
    return partitionIndex
}
function quickSort(qSArr, left, right) {
    console.log('quick sort', left, right)
    if (left < right) {
        const pivot = right
        const partitionIndex = partition(qSArr, pivot, left, right)
        console.log('a', left, right, partitionIndex, qSArr)
        // sort left and right
        quickSort(qSArr, left, partitionIndex - 1)
        // console.log('b: ', left, right, partitionIndex)
        quickSort(qSArr, partitionIndex + 1, right)
        // console.log('c', left, right, partitionIndex)
    }
    return qSArr
}

module.exports = [quickSort]
