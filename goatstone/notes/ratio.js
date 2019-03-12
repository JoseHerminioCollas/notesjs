function rec(arr, count, ratio) {
    console.log('= ', arr, count, ratio)
    if(arr.length === 0){
	return {
	    innerArr: [],
            innerCount: count,
            iRatio: ratio
	}
    }
    const first = arr[0]
    const second = arr[1]
    console.log('------------- ', first, second, first/second)
    if(ratio && ratio !== (first/second)){
	console.log('break in g seq')
    }
    if(first && second){
	ratio = first / second
    }
    let { innerArr, innerCount, iRatio } = rec(arr.slice(1), count, ratio)
    console.log('xx', innerArr, innerCount, count, iRatio)
    return {
	innerArr: [].concat(first).concat(innerArr),
	innerCount,
	iRatio
    }
}
const a = [1, 2, 4, 47777, 1]
;
const p = new Promise((res, rej) => {    
    const returnVal = rec(a, 0, null)
    res(returnVal)
})
p.then(e => console.log('p r', e))

function f() {
    return 1
}
module.exports = [f, 'bt']
