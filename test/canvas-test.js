var expect = require('chai').expect
const Canvas = require('goatstone/notes/canvas.js')

describe('Simple Draw', function () {
    describe('Solution', function() {
        it('draw lines', function() {
            let c = new Canvas(5, 5)
            c.draw(0, 2, 4, 2).draw(2, 0, 2, 4);
            expect(c.drawCanvas()).to.equal('-------\n|  x  |\n|  x  |\n|xxxxx|\n|  x  |\n|  x  |\n-------')
        })
        
        it('draw rectangle', function() {
            let c = new Canvas(7, 7)
            c.draw(1, 1, 5, 4)
            expect(c.drawCanvas()).to.equal('---------\n|       |\n| xxxxx |\n| x   x |\n| x   x |\n| xxxxx |\n|       |\n|       |\n---------');
        })
/*
Create canvas 20 x 4
Draw from (0, 1) to (5, 1)
Draw from (5, 2) to (5, 3)
Draw from (13, 0) to (17, 2)
Fill 'o' at (9, 2)
*/
        it('should draw correctly', () => {
            const c = new Canvas(20, 4)
            c.draw(0, 1, 5, 1).draw(5, 2, 5, 3).draw(13, 0, 17, 2).fill(9, 2, 'o')
            let expectedR = '----------------------\n|oooooooooooooxxxxxoo|\n|xxxxxxooooooox   xoo|\n|     xoooooooxxxxxoo|\n|     xoooooooooooooo|\n----------------------'
            /*
            instead got: '--------------------\n|    xxxxx|\n|xxxxxxxx|\n|    xxxxxx|\n|    x|\n|    |\n|    |\n|    |\n|    |\n|    |\n|    |\n|    |\n|    |\n|    |\n|    |\n|    |\n|    |\n|    |\n|    |\n|    |\n|    |\n--------------------'
*/
            expect(c.drawCanvas()).to.equal(expectedR)
        })
        it('fill rectangle', function() {
            let c = new Canvas(7, 7);
            let actual = c.draw(1, 1, 5, 4).fill(3, 3, 'o');
            console.log(c.drawCanvas)
            expect(c.drawCanvas()).to.equal('---------\n|       |\n| xxxxx |\n| xooox |\n| xooox |\n| xxxxx |\n|       |\n|       |\n---------');
        })
    })
})
