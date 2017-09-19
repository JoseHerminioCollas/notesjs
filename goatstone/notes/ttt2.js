let arr = [
    [1, 0, 0],
    [1, 0, 1],
    [0, 1, 0]
	]
function isW (a) {
    let i
    let isWH
    let isWV
    let isWC1 = true
    let isWC2 = true
    let vC1 = a[0][0]
    let vC2 = a[0][2]
    for (i = 0; i < a.length; i++) {
	let vH = a[i][0]
	let vV = a[0][i]
	isWH = true
	isWV = true
	let k = Math.abs(i - 2)
	if (vC1 !== a[i][i]){
	    isWC1 = false
	}
	if (vC2 !== a[i][k] ) {
	    isWC2 = false
	}
	for (let j = 1; j < a.length; j++ ) {
	    if (vH !== a[i][j]) {
		isWH = false
	    }
	    if (vV !== a[j][i]) {
		isWV = false
	    }
	}
	if (isWH || isWV) return [isWH, isWV]
    }
    if (isWC1){
	return true
    }
    if (isWC2) {
	return true
    }
    return false
}
console.log('xx' , isW(arr))

function Note () { return 1 }
module.exports = Note
