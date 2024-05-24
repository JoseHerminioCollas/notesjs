function rec(arr, count) {
    console.log('= ', arr, count)
///    count =+ 1
    if(arr.length === 0){
	return {
	    innerArr: [],
            innerCount: count
	}
    }
    if(Array.isArray(arr[0])){
	count += 1
	return rec(arr[0], count)
    }
    const first = arr[0]
    let { innerArr, innerCount } = rec(arr.slice(1), count)
    console.log('xx', innerArr, innerCount, count)
    return {
	innerArr: [].concat(first).concat(innerArr),
	innerCount
    }
}
const a = [1, 2, 3, 47777, [1]]
;
const p = new Promise((res, rej) => {    
    const returnVal = rec(a, 0)
    res(returnVal)
})
p.then(e => console.log('p r', e))

function f() {
    return 1
}
module.exports = [f, 'bt']
