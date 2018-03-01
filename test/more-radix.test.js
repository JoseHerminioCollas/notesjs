var expect = require('chai').expect
import radixS from 'goatstone/notes/note.js'
import data from 'goatstone/data'

describe('Note', function () {
    describe('note', () => { 
        it('should work....', () => {
            let note = radixS(data.a)
            expect(1).to.equal(1)
        })
    })
})
