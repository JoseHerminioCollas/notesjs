var expect = require('chai').expect
const note = require('goatstone/notes/note.js')

describe('Test', function () {
    it('shoule be one', function () {
        expect(note()).to.equal(1)
    })
    it('should be 2', function () {
        expect(2).to.equal(2)
    })
})
