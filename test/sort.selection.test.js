var expect = require('chai').expect
var selectionSort = require('goatstone/sort/selection.js')

var toBeSorted = [3, 2, 1]
var sorted = [1, 2, 3]
var ss
describe('sort.selection should sort an array of numbers in place', function () {
    beforeEach(function () {
        ss = selectionSort(toBeSorted)
    })
    it('should sort an array in place', function () {
        for (let v of ss) {
            Array.isArray(v)
        }
        expect(toBeSorted).to.eql(sorted)
    })
    it('The array should remain an array after being changed', function () {
        expect(toBeSorted).to.instanceOf(Array)
        for (let v of ss) {
            Array.isArray(v)
        }
        expect(toBeSorted).to.instanceOf(Array)
    })
})
