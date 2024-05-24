const a = [[1, 1, 0], [1, 0, 1], [1, 1, 1]]
function f(arr) {
    console.log(arr)
    let i = 0
    let isWV
    let isWH
    while(i < arr.length) {
	let j = 1
	isWV = true
	isWH = true
	while(j < arr.length) {
	    console.log(arr[j][i], i)
	    if (arr[0][i] !== arr[j][i]) {
		isWV = false
	    }
	    
	    j += 1
	}
	console.log('x', isWV, isWH)
	i += 1
    }
    return 1
}
const x = () => 1
module.exports = [f, a]
/*  string problems grid problems
*/
