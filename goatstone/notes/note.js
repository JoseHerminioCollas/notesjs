function A() {
    this.b = 1
}
function B() {
    A.call(this)
}
c = Object.create(A.prototype,
    {
        c:
        {
            value: 100,
            enumerable: true,
            configurable: true,
            writable:true
        }
})


console.log(c.b )
console.log(c.c )
console.log(c instanceof A)
console.log(c instanceof B)
