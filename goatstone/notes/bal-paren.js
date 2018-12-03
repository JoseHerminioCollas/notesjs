function fA(count, oc = 0, result, str = '', i = 0) {
    if(i >= count * 2) result(str)
    if(oc === 0){
	str += '('
	oc += 1
    }
    else if (oc > 0){
	str += ')'
	oc -= 1
    }
    i += 1
    return fA(count, oc, result, str, i)
}
const isObject = function(a) {
    return (!!a) && (a.constructor === Object);
}
function f(...args) {
    let str = '('
    let i = 1
    let oc = 1;
    for(let j = 0; j < 3; j += 1){
	new Promise((result, rej) => {
	    console.log('x', str, i, oc)
	    fA(3, oc, result, str, i)
	})
	    .then((res) => console.log(`:: ${res} ::`))
	    .catch(e => console.log(`${e} error`))
	str += '('
	i += 1
	oc += 1	
    }	    
    return 1
}
module.exports = [f, 'bt']
