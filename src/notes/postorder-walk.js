const a = require('./lib/bi-node-tree.js')

pot(a)
function pot (root) {
    const stck = []
    let prev
    let curr
    stck.push(root)
    while (stck.length > 0) {
        curr = stck[stck.length - 1]
        if (!prev || prev.l === curr || prev.r === curr) {
            if (curr.l) {
                stck.push(curr.l)
            } else if (curr.r) {
                stck.push(curr.r)
            }
        } else if (curr.l === prev) {
            if (curr.r) {
                stck.push(curr.r)
            }
        } else {
            console.log('c', curr)
            stck.pop()
        }
        prev = curr
    }
}
