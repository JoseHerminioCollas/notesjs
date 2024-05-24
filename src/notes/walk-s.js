// const trie = {'a': {isE: true, ch: []}}
const nArr = [[0, -1], [1, 1], [0, 1], [-1, 0]]
function walk(arr) {
    const stk = []
    let x = 0
    let y = 0
    stk.push(arr[x][y])
    let count = 0
    while(stk.length > 0 && count < 1) {
	const c = stk.pop()
	nArr.forEach(np => {
	    // console.log('xxx', 123)
	    x = np[0] + x
	    y = np[1] + y
	    if(arr[x] && arr[x][y]){
		console.log('aaa', np, x, y)
		stk.push(arr[x][y])
	    }
	})
	count++
    }
    return 1
}
;
const x = () => 1
