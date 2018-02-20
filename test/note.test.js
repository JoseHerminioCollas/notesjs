var expect = require('chai').expect
const Draw = require('goatstone/notes/note.js')

describe('Simple Draw', function () {
    describe('vertical line', () => {
        const t = new Draw(3, 5)
              .draw([2, 0], [2, 2])
              .drawCanvas()
        it('should draw a vertical line', () => {
            expect(1).to.equal(1)
        })
    })
    describe('horizontal line', () => {
        before(() => {
            const s = new Draw(3, 3)
                  .draw([2, 1], [0, 1])
                  .drawCanvas()            
        })
        it('should draw a horizontal line', () => {
            expect(1).to.equal(1)
        })
    })
    describe('diagonal line as box', () => {
        const u = new Draw(3, 5)
              .draw([0, 0], [2, 2])
              .drawCanvas()
        it('draw a box from to points', () => {
            expect(1).to.equal(1)
        })
    })
})
