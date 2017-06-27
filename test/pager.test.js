var expect = require('chai').expect
const PaginationHelper = require('goatstone/notes/note.js')

describe('PaginationHelper', function () {
    let ph
    beforeEach(() => {
        ph = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4)
    })
    it('should be an Object', function () {
        expect(ph).to.be.an('Object')
    })
    it('should return correct item count', () => {
        expect(ph.itemCount()).to.equal(6)
    })
    it('should return correct number of items on a page', () => {
        expect(ph.pageCount()).to.equal(2)
    })
    it('should return correct pageItemCount', () => {
        expect(ph.pageItemCount(0)).to.equal(4, ph.pageItemCount(0))
    })
    it('should return the corect page index', () => {
        expect(ph.pageIndex(0)).to.equal(0)
    })
    it('should return the corect page index', () => {
        expect(ph.pageIndex(4)).to.equal(1)
    })
    it('should return -1 when supplied incorrect index', () => {
        expect(ph.pageIndex(110)).to.equal(-1)
    })
    it('should return -1 when supplied incorrect index', () => {
        expect(ph.pageIndex(-110)).to.equal(-1)
    })
})
/*
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1
*/
