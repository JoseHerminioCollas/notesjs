var expect = require('chai').expect
const arrayToTree = require('goatstone/notes/note.js').arrayToTree
const TreeNode = require('goatstone/notes/note.js').TreeNode
// describe('Notes', function () {
//     it('should display results', function () {
//         expect(1).to.equal(1)
//     })
//  })
describe('arrayToTree', function () {
    it('empty array', function () {
        var array = []
        var expected
        test(array, expected)
    })
    it('array with multiple elements', function () {
        var array = [17, 0, -4, 3, 15]
        var expected = new TreeNode(17, 
            new TreeNode(0, new TreeNode(3), new TreeNode(15)), 
            new TreeNode(-4)
        )
        test(array, expected)
    })
})

function test (array, expected) {
    expect(JSON.stringify(arrayToTree(array))).to.equal(JSON.stringify(expected))
}
// // //
// var currP
// var stack = []
// stack.push(arrayToTree(a))
// while (stack.length > 0) {
//     currP = stack.pop()
//     console.log('----', currP.value)
//     if (currP.left) {
//         stack.push(currP.left)
//     }
//     if (currP.right) {
//         stack.push(currP.right)
//     }
// }
