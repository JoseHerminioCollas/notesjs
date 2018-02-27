// store as x y combination
// use as canvas[y][x]
// draw lines from 2 point, box from 2 points, fill flood
function Canvas (w, h) {
    this.canvas = Array.from(new Array(w))
        .map(x => new Array(h).fill(' '))
}
Canvas.prototype.drawCanvas = function () {
    let framed = this.canvas.map(x => {
        return ['|', ...x, '|']
    })
    framed.unshift(new Array(framed[0].length).fill('-'))
    framed.push(new Array(framed[0].length).fill('-'))
    let str = framed.reduce((acc, v, i, arr) => {
        const lineEnd = (i === arr.length - 1) ? '' : '\n'
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
    let curr = [p1, p2]
    let stack = []
    stack.push(curr)
    while (stack.length > 0) {
        let curr = stack.pop()
        this.canvas[ curr[1] ][ curr[0] ] = symbol
        // keep walking check neighbor pixels, set new curr accordingly
        // scan the whole square around [1, -1], [1 1], [-1, 1], [-1, -1]
        const walk = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, -1], [1, 1], [-1, 1], [-1, -1]]
        for (let i = 0; i < walk.length; i++) {
            const newV = [curr[0] + walk[i][0], curr[1] + walk[i][1]]
            if (typeof this.canvas[newV[1]] !== 'undefined' &&
                typeof this.canvas[newV[1]][newV[0]] !== 'undefined' &&
                this.canvas[newV[1]][newV[0]] !== symbol &&
                this.canvas[newV[1]][newV[0]] !== 'x'
              ) {
                stack.push(newV)
            }
        }
    }
}
module.exports = Canvas
