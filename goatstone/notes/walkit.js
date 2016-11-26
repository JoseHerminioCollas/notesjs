function Node (d) {
    this.l = null
    this.r = null
    this.d = d
}
var a = new Node('8')
a.l = new Node('5')
a.r = new Node('4')
a.r.r = new Node('11')
a.r.r.l = new Node('3')

a.l.l = new Node('9')

a.l.r = new Node('7')
a.l.r.l = new Node('1')
a.l.r.r = new Node('12')

a.l.r.r.l = new Node('2')

var stck = []
walkIt(a)
function walkIt (el) {
    stck.push(el)
    while (stck.length > 0) {
        let curr = stck.pop()
        console.log('curr', curr.d)
        if (curr.r) {
            stck.push(curr.r)
        }
        if (curr.l) {
            stck.push(curr.l)
        }
    }
}
