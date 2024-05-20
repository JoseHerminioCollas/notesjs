function getAllPermutations(string) {
  const results = []
  if (string.length === 1) {
    results.push(string)
    return results
  }
  for (let i = 0; i < string.length; i += 1) {
    const firstChar = string[i]
    const charsLeft = string.substring(0, i) + string.substring(i + 1)
    const innerPermutations = getAllPermutations(charsLeft)
    for (let j = 0; j < innerPermutations.length; j += 1) {
      results.push(firstChar + innerPermutations[j])
    }
  }
  return results
}
const str = 'abc'
const r2 = getAllPermutations(str)

console.log('r', r2)
