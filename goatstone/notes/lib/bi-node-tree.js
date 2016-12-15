function Node(d) {
    this.l
    this.r
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

var b = new Node('1')
b.l = new Node('2')
b.r = new Node('3')
b.r.l = new Node('6')
b.r.l.l = new Node('8')
b.r.l.r = new Node('9')

b.l.l = new Node('4')
b.l.r = new Node('5')
b.l.l.l = new Node('7')

module.exports = b
/* for var b
preorder:    1 2 4 7 5 3 6 8 9
inorder:     7 4 2 5 1 8 6 9 3
postorder:   7 4 5 2 8 9 6 3 1
level-order: 1 2 3 4 5 6 7 8 9
*/
/*
 const t  = require('./lib/bi-node-tree.js')

 function walkIt(t){
 console.log(t.d)
 t.l && walkIt(t.l)
 t.r && walkIt(t.r)
 }

 walkIt(t)
* */