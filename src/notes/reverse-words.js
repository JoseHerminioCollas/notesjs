function rev(a, i, j) {
  while (i < j) {
    [a[i], a[j]] = [a[j], a[i]]
    i += 1
    j -= 1
  }
}
function x(str) {
  const arr = str.split('')
  let i = 0
  let j = 0
  rev(arr, 0, arr.length - 1)
  while (j < arr.length) {
    while (arr[i] === ' ') {
      i += 1
    }
    while (arr[j + 1] && arr[j + 1] !== ' ') {
      j += 1
    }
    rev(arr, i, j)
    j += 1
    i = j
  }
  return arr.join('')
}
const str = 'abc bcx 325 ew'
const r = x(str)
console.log('r', str)
console.log('r', r)
