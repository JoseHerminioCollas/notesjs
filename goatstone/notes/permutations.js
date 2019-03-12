
function rec(str) {
    const results = []
    if (str.length === 1) {
	results.push(str)
        return results
    }
    for(let i = 0; i < str.length; i += 1){
	const first = str[i]
	const rest = str.slice(0, i) + str.slice(i + 1)
	const ips = rec(rest)
	for(let j = 0; j < ips.length; j += 1){
	    results.push(first + ips[j])
 	}
    }
    return results
}
const r = rec('abc')
console.log('rr', r)
;
function f() {
    return 1
}
module.exports = [f, 'bt']
