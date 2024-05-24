function x() {
  const s = '0111100'
  let zc = 0 // zero count
  let start = 0
  const len = s.length
  while (start < len) {
    while (start < len && s[start] !== '0') {
      start += 1
    }
    let end = start
    while (end < len && s[end] !== '1') {
      end += 1
    }
    zc = Math.max(zc, end - start)
    start = end
  }
  return zc
}
const a = x()
console.log('r', a)
