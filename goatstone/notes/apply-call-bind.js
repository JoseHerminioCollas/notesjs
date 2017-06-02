// var a = [2, 1, 5, 56, 55, 66, 1, 123, 2, 12]
// console.log('a', a)
// selection closer obj creation
var a = function () {
    return this
}.bind(1)
// var b = new A()
// console.log('aaa',  b.call({a: 5}) )
// console.log('aaa',  a.call(5) )
console.log('aaa', a())
// console.log('aaa', z.b)

function Note (arr) {
    return 1
}

module.exports = Note
