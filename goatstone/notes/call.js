function A(x, y) {
  this.x = x
  this.y = y
}
function B(x, y) {
    A.call(this, x, y);
    this.z = 'ZZZ';
}
var xyz = new B('XXX', 5);

console.log(xyz)

function Note () { return 1 }
module.exports = Note
