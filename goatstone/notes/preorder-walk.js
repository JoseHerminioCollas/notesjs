const a = require('./lib/bi-node-tree.js')

// preorder

function preO (root) {
    var s = []
    s.push(root)
    while (s.length > 0) {
        var curr = s.pop()
        console.log('c', curr.d)
        curr.r && s.push(curr.r)
        curr.l && s.push(curr.l)
    }
}

preO(a)
