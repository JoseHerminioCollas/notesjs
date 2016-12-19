const a = require('./lib/bi-node-tree.js')

inOrderTraversal(a)
// in_order_traversal_iterative(a)

// function in_order_traversal_iterative (root) {
//     var stck
//     var current = root
//     while (stck.length > 0 || current) {
//         if (current) {
//             stck.push(current)
//             current = current.l
//         } else {
//             current = s[s.length-1]
//             stck.pop()
//             console.log(c.d)
//             current = current.r
//         }
//     }
// }

function inOrderTraversal (el) {
    var stck = []
    var isDone = false
    let curr = el
    while (!isDone) {
        if (curr) {
            stck.push(curr)
            curr = curr.l
        } else {
            if (stck.length > 0) {
                curr = stck.pop()
                console.log('e', curr.d)
                curr = curr.r
            } else {
                isDone = true
            }
        }
    }
}
