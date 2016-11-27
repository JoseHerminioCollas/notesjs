var expect = require('chai').expect
var A = require('../goatstone/notes/note.js').A
var B = require('../goatstone/notes/note.js').B
describe('B inherits from A', function () {
    it('The Instance of B', function () {
        var b = new B()

        expect(b.c).to.equal(1)
        expect(b.d).to.equal(10)
        expect(b.e).to.equal(100)
        expect(b).to.be.instanceof(A)
        expect(b).to.be.instanceof(B)
    })
})
