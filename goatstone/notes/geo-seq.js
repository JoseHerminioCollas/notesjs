// balanced parens? oc OpenClosed
function fA(arr, result, i = 1, acc = 0, c = 0) {
    console.log(i,  arr[i], arr[i - 1], c, acc,'a')
    if(i > arr.length -1) return result(c)
    else if(arr[i] - arr[i - 1] === 1) {
	i += 1
	acc += 1
	if(acc === 2){
	    c += 1
	    acc = 0
	}
	console.log(i, arr[i], arr[i - 1], c, acc, '     b')
	return fA(arr, result, i, acc, c)
    }
    i += 1
    console.log(i,  arr[i], arr[i - 1], c, acc, '         z')
    return fA(arr, result, i, acc, c)
}
function f(...args) {
    let a = [1,4,8, 9]
    let b = [1, 2, 3, 1,2, 3,4,4,3,4, 5]
    new Promise((result, rej) => {
	const r = fA(a, result)
    }).then((res) => console.log(`:: ${res} ::`))
    return 1
}
module.exports = [f, 'bt']
