// simple draw
function Canvas (w, h) {
    if (!w || ! h || typeof w !=='number' || typeof h !== 'number'  ) throw 'Provide width and height arguments.'
    if(w < 1 || h < 1) throw 'Out of bounds'
    this.canvas = Array.from(new Array(h))
        .map(x => new Array(w).fill(' '))
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
Canvas.prototype.draw = function (p1x, p1y, p2x, p2y) { // x, y x, y :::
    console.log(arguments)
    if (p1y >= this.canvas.length || p1x >= this.canvas[0].length ||
        p2y >= this.canvas.length || p2x >= this.canvas[0].length)
        throw 'Out of bounds'
    const p1 = [p1y, p1x] // canvas[y][x] canvas[ p1[0] ][ p1[1] ]
    const p2 = [p2y, p2x]
    let c = p1 // c x y
    let isDone = false
    while (!isDone) {
        this.canvas[ c[0] ][ c[1] ] = 'x'
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
            this.draw(p1[1], p1[0], p2[1], p1[0])
            this.draw(p2[1], p1[0], p2[1], p2[0])
            this.draw(p2[1], p2[0], p1[1], p2[0])
            this.draw(p1[1], p2[0], p1[1], p1[0])
            isDone = true
        }
    }
    return this
}
Canvas.prototype.fill = function (p1, p2, symbol) {
    if (p1 >= this.canvas[0].length || p2 >= this.canvas.length)
        throw 'Out of bounds'
    let curr = [p1, p2]
    if (this.canvas[ curr[1] ][ curr[0] ] !== ' ') return
    let stack = []
    stack.push(curr)
    while (stack.length > 0) {
        let curr = stack.pop()
        this.canvas[ curr[1] ][ curr[0] ] = symbol
        const walk = [[0, 1], [1, 0], [0, -1], [-1, 0]]
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
    return this
}
module.exports =  Canvas
