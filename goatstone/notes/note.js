// [r][c] is there a win H, V Cross?,
// chang 0 to 1, connect lines, fill flood
// const arr = [3, 4, 11, 77, 33]
// fill array with array, mess up index!!!!
//    this.canvas = Array.from(new Array(w)).fill(new Array(h).fill('x'))
function Draw (w, h) {
    this.canvas = Array.from(new Array(w))
        .map(x => new Array(h).fill(''))
}
Draw.prototype.draw = function (p1, p2) {
    let c = p1 // c x y
    let isDone = false
    while (!isDone) {
        this.canvas[ c[1] ][ c[0] ] = 'x'
        if (c[1] === p2[1]) { // is Horizontal?
            if (c[0] < p2[0]) { // is it less???? then decrement
                c[0]++
            } else {
                isDone = true
            }
        } else if (c[0] === p2[0]) { // is Vertical?
            if (c[1] < p2[1]) {
                c[1]++
            } else {
                isDone = true
            }
        } else {
            isDone = true
        }
    }
    return this
}
Draw.prototype.drawCanvas = function () {
    console.log('ll', this.canvas)
    let str = ''
    for (let i = 0; i < this.canvas.length; i++) {
  //      str += this.canvas[i].join(' ') + i + '\n'
        for (let j = 0; j < this.canvas.length; j++) {
        }
    }
    return str
}
const d = new Draw(3, 5)
const s = d
      .draw([0, 1], [0, 2])
      .drawCanvas()
console.log(s)
// //
function Note () { return 1 }
module.exports = Note
