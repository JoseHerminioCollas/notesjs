let debug = 'xx'
const arr = [100, 3, 23, 1, 55, 23, 76, 4, 333, 222]
const digL = String(Math.max(...arr)).length - 1
let digI = digL
let cArr
while (digI >= 0) {
    cArr = Array.from(new Array(10)).map(n => [])
    arr.forEach((n) => {
        let nArr = Array.from(new Array(digL + 1)).map(() => 0)
	const nArrB = Array.from(String(n))
	nArr.splice(-nArrB.length, nArrB.length, ...nArrB)
        let charI = nArr[digI]
        cArr[charI].push(n)
        console.log('xxx', nArr, digI, charI)
    })
    arr.splice(0)
    cArr.forEach(a => arr.push(...a))
    digI -= 1
}
debug = arr
const x = () => cArr
module.exports = [x, debug]
// radix digitLength digtiIdex
// iterate through digitIndex
// place into counting array, unwarp back into array
