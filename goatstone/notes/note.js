// store as x y combination
// use as canvas[y][x]
// draw lines from 2 point, box from 2 points, fill flood
function Draw (w, h) {
    this.canvas = Array.from(new Array(w))
        .map(x => new Array(h).fill(''))
}
Draw.prototype.drawCanvas = function () {
    // let str = ''
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
            this.draw([p1[0], p1[1]], [p2[0], p1[1]])
            this.draw([p2[0], p1[1]], [p2[0], p2[1]])
            this.draw([p2[0], p2[1]], [p1[0], p2[1]])
            this.draw([p1[0], p2[1]], [p1[0], p1[1]])
            isDone = true
        }
    }
    return this
}

module.exports = Draw
