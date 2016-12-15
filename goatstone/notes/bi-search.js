function Node (d) {
    this.d = d
    this.l
    this.r
}
function BinTree (root) {
    this.root = root
}
BinTree.prototype.insert = function (node) {
    let curr = this.root
    let isDone = false
    while (!isDone) {
        if (node.d < curr.d) {
            if (curr.l) curr = curr.l
            else {
                curr.l = node; isDone = true
            }
        } else {
            if (curr.r) curr = curr.r
            else {
                curr.r = node; isDone = true
            }
        }
    }
}

const n = new Node(11)
const t = new BinTree(n)
t.insert(new Node(5))
t.insert(new Node(2))
t.insert(new Node(12))
t.insert(new Node(22))

console.log('aaa', n)
function inOrderWalk (root) {
    const s = []
    let curr = root
    let isDone = false
    while (!isDone) {
        console.log('x', curr)
        if (curr) {
            s.push(curr)
        }
        isDone = true
    }
}
inOrderWalk(n)
