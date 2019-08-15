const x = (ints, s) => {
  const nFS = [] // numbers for sum
  let i = 0
  // get max and min so the array does not get so large!!!!
  const min = Math.min(...ints)
  const max = Math.max(...ints)
  while (i < ints.length) {
    let j = 0
    while (j < nFS.length) {
      if (ints[i] + nFS[j] === s) {
        return [nFS[j], ints[i]]
      }
      j += 1
    }
    if (ints[i] > s - max || ints[s] < s - min) {
      nFS.push(ints[i])
    }
    i += 1
  }
  return undefined
}
// const ints2 = [3, 4, 55, 2, 22, 6, 7]
// const r = x(ints2, 5)
const r2 = x([1, -2, 3, 0, -6, 1], -6)
console.log('r', r2)
