const expect = require('chai').expect
const [func, arg] = require('../goatstone/notes/note')

describe('Test', () => {
    it('should', () => {
	const eR = func(arg)
	console.log(eR)
        expect(1).to.equal(1)
    })
})
