const lL = {
    ll: null,
    removeHead() {
	this.ll = this.ll.l
    },
    toString() {
        const ret = []
        let curr = this.ll
        while (curr) {
            ret.push(curr.d)
            curr = curr.l
        }
        return ret.join('')
    },
    delL(val) {
	let curr = ll
	let prev = null
	while (curr) {
            if (curr.d === val) {
		prev.l = curr.l.l
            }
            curr = curr.l
            prev = curr
	}
    }
}
