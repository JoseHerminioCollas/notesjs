// let = [25, 5, 52, 3, 4, 44, 24, 44, 52]
let arr = [
    [20, 0, 1],
    [21, 0, 0],
    [1, 1, 1]
]
function LL () {
    this.head
}
function L (d, n) {
    this.d = d
    this.next = n || null
}
let ll = new LL()

let l_a = new L(12)
let l = new L(10, l_a)
ll.head = l

function a (node) {
    let curr = ll.head
    while (curr) {
        console.log('xxxxx', curr)
        if (ll.head.d > node.d) {
            let th = ll.head
            ll.head = node
            node.next = th
            break
        }
        if (curr.next === null) {
            curr.next = node
            console.log('a')
            break
            console.log('b')
        }
        if (node.d > curr.d && node.d < curr.next.d) {
            let t = curr.next
            curr.next = node
            curr.next.next = t
            break
        }
        curr = curr.next
    }
}
let n = {d: 11, next: null}
a(n)
showLL(ll.head)
function showLL (ll) {
    let curr = ll
    while (curr) {
        console.log(curr.d)
        curr = curr.next
    }
}
function Note () { return 1 }
module.exports = Note
