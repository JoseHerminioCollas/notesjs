function subsets(str) {
  const res = ['']
  for (let s of str) {
    const subset = res.map(resS => s + resS)
    res.push(...subset)
  }
  return res
}
const s = 'abc'
const r = subsets(s)

console.log('r', r)