function A () {
    this.a = 1
}
A.prototype.bF = function () {
    return [this.a, this.b]
}

const a = new A()

const ra = a.bF()
const ra2 = a.bF.call(Object.assign({a: 9999, b: 3333}, a, {a: 'AAAAAA'}))

console.log('a', (typeof ra))
console.log('a', ra)
console.log('a', ra2)

const c = { a: x => 1111 }

console.log('c.a()', c.a(), c.x)
