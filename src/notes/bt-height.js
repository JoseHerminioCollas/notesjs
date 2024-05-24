function Node(d, l, r) {
    this.d = d
    this.l = l
    this.r = r
}
function getRand() {
    return Math.floor(Math.random() * 8)
}
function walkR(bT) {
    bT.l && walkR(bT.l)
    console.log('walk', bT.d)
    bT.r && walkR(bT.r)
}
function pOWalk(bT) {
    ;   
}
function walk(bT) {
    const rArr = []
    const stk = []
    let isDone = false
    let curr = bT    
    let h = 0   
    const disp = {}
    while (!isDone) {
	if(curr) {
	    console.log('----------->>', h, curr.d)
	    curr.l && curr.l.d && console.log('L', curr.l.d)
	    curr.r && curr.r.d && console.log('R', curr.r.d)
	    stk.push(curr)
	    if (disp[h])
		disp[h].push(curr.d)
	    else disp[h] = [curr.d]
	    curr = curr.l	    
	    if (curr) h += 1
	    // h += 1
	}
	else {
	    if(stk.length > 0) {
		curr = stk.pop()
		console.log('<<== V: ', h, curr.d)
		rArr.push(curr.d)
		if (curr.r) {
//		     h += 1
		    console.log('xx', h, curr.d)
		}
		//		else  h -= 1
		if (curr.r) h += 1
		curr = curr.r
	    } else {
		isDone = true
	    }
	}
    }
    console.log('disp: ', disp)
    return rArr
}
function toString(bT) {
    return walk(bT).join(' ')
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
    d: 13,
    l: null,
    r: null,
};
function f(...args) {
    const bT = args.shift()
    let a = Array.from(Array(2)).map(() => getRand())
    console.log('x', a)
    a = [56, 3, 7, 1, 2, 9]
    a.forEach(n => insert(bT, n))
    const s = toString(bT)
    console.log('s', s)
    return 1
}
module.exports = [f, bt]
/* bitrees, heaps, strings */
