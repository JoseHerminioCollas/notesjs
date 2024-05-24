/* eslint-disable no-restricted-syntax, no-console */
/* eslint-disable no-param-reassign */
function addArrayNums(arr) {
  return arr.reduce((acc, c) => {
    const total = acc + c
    return total
  }, 0)
}
function x(data, count = 0) {
  if (data instanceof Object !== true) throw new Error('supply an Object for data')
  for (const e of Object.entries(data)) {
    if (Number.isSafeInteger(e[1])) {
      console.log('a', e)
      count += e[1]
    } else if (Array.isArray(e[1])) {
      count += addArrayNums(e[1])
    } else {
      console.log('b', e)
      count = x(e[1], count)
    }
  }
  return count
}
const d = {
  a: [1, 3, 2],
  b: { c: 3, d: { a: 333 } },
  c: 2,
  d: 1,
}
// console.log('arr', arr)
console.log('r', x(d))
