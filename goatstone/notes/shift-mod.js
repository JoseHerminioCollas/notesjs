let s = ' XThe rain in spain'

function runN (s) {
    let i = 0
    let len = s.length
    let s2 = []
    let shift = 2
    while (i < len) {
	let i2 = (i + shift) % len
	s2[i2] = s[i]
	i++
    }
    return s2.join('')
}
console.log('xx', runN(s))
function Note () { return 1 }
module.exports = Note
