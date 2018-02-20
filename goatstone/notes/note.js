// store as x y combination
// use as canvas[y][x]
// draw lines from 2 point, box from 2 points, fill flood
function Canvas (w, h) {
    this.canvas = Array.from(new Array(w))
        .map(x => new Array(h).fill(' '))
}
Canvas.prototype.drawCanvas = function () {
    let framed = this.canvas.map( x => {
        return ['|', ...x, '|']
    })
    framed.unshift(new Array(framed[0].length).fill('-'))
    framed.push(new Array(framed[0].length).fill('-'))
    let str = framed.reduce((acc, v, i, arr) => {
        const lineEnd = (i === arr.length - 1)? '' : '\n' 
        let returnVal = acc + v.join('') + lineEnd
        return returnVal
    }, '')
    return str
}
Canvas.prototype.draw = function (p1x, p1y, p2x, p2y) {
    const p1 = [p1x, p1y]
    const p2 = [p2x, p2y]
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
            this.draw(p1[0], p1[1], p2[0], p1[1])
            this.draw(p2[0], p1[1], p2[0], p2[1])
            this.draw(p2[0], p2[1], p1[0], p2[1])
            this.draw(p1[0], p2[1], p1[0], p1[1])
            isDone = true
        }
    }
    return this
}
Canvas.prototype.fill = function (p1, p2, symbol) {
    // this.canvas[0][0] = 'f'
} //
module.exports = Canvas
