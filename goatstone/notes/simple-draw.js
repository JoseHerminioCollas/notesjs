// [r][c] is there a win H, V Cross?,
// chang 0 to 1, connect lines, fill flood
// const arr = [3, 4, 11, 77, 33]
// fill array with array, mess up index!!!!
//    this.canvas = Array.from(new Array(w)).fill(new Array(h).fill('x'))
function Draw (w, h) {
    this.canvas = Array.from(new Array(w))
        .map(x => new Array(h).fill(''))
}
Draw.prototype.drawCanvas = function () {
    let str = ''
    for (let i = 0; i < this.canvas.length; i++) {
  //      str += this.canvas[i].join(' ') + i + '\n'
        for (let j = 0; j < this.canvas.length; j++) {
        }
    }
    return this.canvas
}
Draw.prototype.draw = function (p1, p2) {
    let c = p1 // c x y
    let isDone = false
    while (!isDone) {
        this.canvas[ c[1] ][ c[0] ] = 'x'
        if (c[1] === p2[1]) { // is Horizontal?
            if (c[0] < p2[0]) { // is it less???? then decrement
                c[0]++
            } else if (c[0] > p2[0]) {
                c[0]--
            } else {
                isDone = true
            }
        } else if (c[0] === p2[0]) { // is Vertical?
            if (c[1] < p2[1]) {
                c[1]++
            } else if (c[1] > p2[1]) {
                c[1]--
            } else {
                isDone = true
            }
        } else { // is Diagona, draw a box
            // p1 p2 call combo of values
            // [ p1x, p1y , p2x p1y ]
            // [ p2x, p1y , p2x p2y ]
            // [ p2x, p2y , p1x p2y ]
            // [ p1x, p2y , p1x p1y ]
            this.draw([p1[0], p1[1]], [p2[0], p1[1]])
            this.draw([p2[0], p1[1]], [p2[0], p2[1]])
            this.draw([p2[0], p2[1]], [p1[0], p2[1]])
            this.draw([p1[0], p2[1]], [p1[0], p1[1]])            
            isDone = true
        }
    }
    return this
}
// write tests!!!

const s = new Draw(3, 3)
      .draw([2, 1], [0, 1])
      .drawCanvas()
const t = new Draw(3, 5)
    .draw([2, 0], [2, 2])
    .drawCanvas()

const u = new Draw(3, 5)
    .draw([0, 0], [2, 2])
    .drawCanvas()

console.log('x.', s)
console.log('x.', t)
console.log('u:', u)
//
function Note () { return 1 }
module.exports = Note
