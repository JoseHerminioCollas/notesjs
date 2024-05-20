// balanced parens? oc OpenClosed
function fA(str, result, i = 0, oc = 0) {
    if(i >= str.length) return result((oc === 0))
    if(str[i] === '(') oc += 1
    else if(str[i] === ')') oc -= 1
    return fA(str, result, i += 1, oc)
}
function f(...args) {
    let s = '((()))'
    new Promise((result, rej) => {
	const r = fA(s, result)
    }).then((res) => console.log(`:: ${res} ::`))
    return 1
}
module.exports = [f, 'bt']
