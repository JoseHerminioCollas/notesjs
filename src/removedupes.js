// partition merge sort fib subsets perms recursion debounce throttle
// rev LL, c n p
const x = (s) => {
  let A = [...s]
  let hasPair = true
  let result
  while (hasPair) {
    result = []
    hasPair = false
    let i = 0
    if(A.length === 0) break
    console.log(i, A)
    while (i < A.length) {
      if (
        typeof A[i + 1] === 'undefined' ||
        A[i] !== A[i + 1]
      ) {
        result.push(A[i])
        i += 1
      } else {
        hasPair = true
        i += 2
      }
    }
    A = result
}
  if (result.length === 0) return 'Empty String'
  return result.join('')
}

const arg = [...Array(24)]
  .map(function (r, i) {
    let str = String.fromCodePoint(i + 97)
    if (Math.random() > 0.8) {
      str = `${str}${str}`
    }
    return str
  })
  .join('')

const r = x('baab')
// console.log('---', arg)
console.log('---', r)
