function Node(d, l, r) {
    this.d = d
    this.l = l
    this.r = r
}
function getRand() {
    return Math.floor(Math.random() * 10)
}
function walkR(bT) {
    bT.l && walkR(bT.l)
    console.log('walk', bT.d)
    bT.r && walkR(bT.r)
}
function pOWalk(bT) {

}
function walk(bT) {
    const rArr = []
    const stk = []
    let isDone = false
    let curr = bT
    while (!isDone) {
	if(curr) {
	    stk.push(curr)
	    curr = curr.l	    
	}
	else {
	    if(stk.length > 0) {
		curr = stk.pop()
		rArr.push(curr.d)
		curr = curr.r
	    } else {
		isDone = true
	    }
	}
    }
    return rArr
}
function toString(bT) {
    return walk(bT).join('')
}
function insert(node, data) {
    if (data < node.d) {
        if (!node.l) {
            node.l = new Node(data, null, null)
        } else { insert(node.l, data) }
    } else {
        if (!node.r) {
            node.r = new Node(data, null, null)
        } else { insert(node.r, data) }
    }
}
const bt = {
    d: 11,
    l: null,
    r: null,
}
function f(...args) {
    const bT = args.shift()
    const a = Array.from(Array(10)).map(() => getRand())
    a.forEach(n => insert(bT, n))
    insert(bT, 3)
    const s = toString(bT)
    console.log('s', s)
    return 1
}
module.exports = [f, bt]
/* bitrees, heaps, strings */
