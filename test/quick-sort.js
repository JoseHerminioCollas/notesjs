const { expect } = require('chai')

const arr = [111, 3, 32, 5, 654, 33, 2, 1, 4545, 4]
const [quickSort] = require('../goatstone/notes/quick-sort.js')

describe('Quick Sort', () => {
    it('should return a sorted array', () => {
        const arr2 = quickSort(arr, 0, arr.length - 1)
        for (let i = 0; i < arr2.length - 1; i += 1) {
            expect(arr2[i]).to.be.below(arr2[i + 1])
        }
    })
})
