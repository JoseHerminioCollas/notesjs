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


/*
var a = [17, 0, -4, 3, 15]

let treeRoot
function insert (x) {
    let currNode = treeRoot
    let done = false
    if (typeof currNode === 'undefined') {
        treeRoot = new TreeNode(x)
        return
    }
    while (!done) {
        if (x < currNode.value) {
            if (!currNode.left) {
                // console.log('------', x,  currNode.left)
                currNode.left = new TreeNode(x)
                done = true
            } else {
                currNode = currNode.left
            }
        } else {
                // console.log('rrrr', x,  currNode.right)
            if (!currNode.right) {
                currNode.right = new TreeNode(x)
                done = true
            } else {
                currNode = currNode.right
            }
        }
    }
}

function arrayToTree (arr) {
    arr.forEach(x => {
        insert(x)
    })
    return treeRoot
}
var TreeNode = function (value, left, right) {
    this.value = value
    this.left = left
    this.right = right
}

module.exports = {arrayToTree, TreeNode}

*/