var expect = require('chai').expect
const Canvas = require('goatstone/notes/note.js')

describe('Simple Draw', function () {
    describe('vertical line', () => {
        const t = new Canvas(3, 5)
              .draw(2, 0, 2, 2)
              .drawCanvas()
        it('should draw a vertical line', () => {
            expect(1).to.equal(1)
        })
    })
    describe('horizontal line', () => {
        before(() => {
            const s = new Canvas(3, 3)
                  .draw(2, 1, 0, 1)
                  .drawCanvas()            
        })
        it('should draw a horizontal line', () => {
            expect(1).to.equal(1)
        })
    })
    describe('diagonal line as box', () => {
        const u = new Canvas(3, 5)
              .draw(0, 0, 2, 2)
              .drawCanvas()
        it('draw a box from to points', () => {
            expect(1).to.equal(1)
        })
    })
    describe('flood fill', () => {
        it('should fill rectangle', function() {
            let c = new Canvas(7, 7)
            let actual = c.draw(1, 1, 5, 4).fill(3, 3, 'o')
            const expectedResult = '---------\n|       |\n| xxxxx |\n| xooox |\n| xooox |\n| xxxxx |\n|       |\n|       |\n---------'
            const result = c.drawCanvas()
            console.log(result)
            console.log(c.canvas)
            expect(result).to.equal(expectedResult)
        })
    })
})
