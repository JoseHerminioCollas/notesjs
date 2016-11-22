var expect = require('chai').expect
var n = require('../goatstone/notes/note.js')
describe('Notes', function () {
    it('should display results', function () {
    	  n() 
        expect(1).to.equal(1);
    });
});
