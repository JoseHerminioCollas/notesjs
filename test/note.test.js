const expect = require('chai').expect
const [func, m] = require('../goatstone/notes/note')

const arr = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
const arr2 = [4, 33, 1, 444, 3, 77, 23]
const ll = {d: 'a', n: {d: 'b', n: {d: 'c', n: null}}}

describe('Test', () => {
    it('should', () => {
	const eR = func(arr2)
	const expN = Math.min(...arr2)
        expect(expN).to.equal(arr2[0])
    })
})
