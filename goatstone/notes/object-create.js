function A () {
    this.c = 1
}
function B () {
    A.call(this)
    this.d = 10
}
B.prototype = Object.create(A.prototype,
    {e: {
        value: 100,
        enumerable: true,
        configurable: true,
        writable: true
    }
    })

module.exports = {A: A, B: B}
