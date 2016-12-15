const a = [11, 4, 13, 23, 25, 27, 3, 2323, 14, 22, 1]
divMerge(a)
function divMerge (items) {
    console.log(`divMerge items: items `, items)
    if (items.length < 2) { return items }
    const middle = Math.floor(items.length / 2)
    const left = items.slice(0, middle)
    const right = items.slice(middle)
    return merge(divMerge(left), divMerge(right))
}
function merge (left, right) {
    console.log(`merge:          ${left} ${right}`)
    var result = []
    var il = 0
    var ir = 0
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++])
        } else {
            result.push(right[ir++])
        }
    }
    result = result.concat(left.slice(il)).concat(right.slice(ir))
    return result
}
