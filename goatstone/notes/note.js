
function f(arr) {
    console.log(arr)
    const digLen = String(Math.max(...arr)).length
    let digitI = digLen - 1
    while(digitI >= 0) {
	const cArr = Array.from(Array(10)).map(() => [])
	arr.forEach(n => {
	    const numArr = Array(digLen).fill(0)
	    const numArr2 = String(n).split('')
	    numArr.splice(-numArr2.length, numArr2.length, ...numArr2)
	    cArr[ numArr[digitI] ].push(n)
	})
	arr.splice(0)
	arr = [].concat(...cArr)	
	digitI -= 1
    }
    console.log(arr)
    return 1
}

const x = () => 1
module.exports = [f, 'debug']
/*  radix string problems grid problems
get 
digLen digI
for @ digL
for @ e in arr
digArr
digArr[digI]
cArr counting array

cArr[nI] = n

*/
