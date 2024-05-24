// promise examples throddle debounce
let debug
const a = [4, 34, 54, 23, 4]
const b =  a.sort((a, b) => a - b)
let r
function biS (arr, s) {
    if (!Array.isArray(arr)) throw 'no arr'
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
	const c = Math.floor((l + r)/2);
	console.log('xxxxxx', c, l, r)
	if (arr[c] < s) {
	    l = c + 1 // narrow exclude current c value
	}
	else if (arr[c] > s) {
	    r =  c - 1
	}
	else { return c }
    }
    return -1
}
r = biS(b, 54);
console.log('aaa', r);
const x = (arr) => 1;
module.exports = [x, [a, b]];
// arr(4).bis()
// const arr().bis()
