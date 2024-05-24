
function strF(str) {
    const arr = str.split('')
    let i = 0
    for(let j = i; j <= arr.length; j++){
	console.log(': ',i, j, arr[j])
	if(arr[j + 1] === ' ' || j === arr.length)
	{
	    rev(i, j, arr)
	    i = j + 2
	}
    }
    console.log('xxx', arr)
    return 1
}
function rev(i, j, arr) {
    let slc = arr.slice(i, j + 1)
    console.log('aa', i, j, slc)
    slc.reverse()
    arr.splice(i, slc.length, ...slc)
}
function f(...args) {
    const strA = 'a fast car'
    const r = strF(strA)
    console.log(r)
    return 1
}
module.exports = [f, 'bt']
