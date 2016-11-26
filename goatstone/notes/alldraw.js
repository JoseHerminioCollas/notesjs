var d3 = require('d3')

var mainStyle = {
    'color': 'red',
    'font-size': '2em',
    'background-color': 'black',
    'padding': '20px',
    'width': '10px',
    'height': '10px',
    'float': 'right',
    'margin': '20px'
}
var blockDimensions = {
    width: '10px', height: '10px'
}
Object.assign(mainStyle, blockDimensions)

var data = [1, 2, 3, 1, 1122, 22, 2, 3, 1, 1122]

loopEngine(0)
function loopEngine (count) {
    data.splice(-1)
    if (data.length === 0) {
        data = [2, 3, 4, 54, 5, 5, 55, 3]
    }
    drawItem()
    console.log(count, data)
    if (count < 190) {
        setTimeout(function () {
            loopEngine(++count)
        }, 500)
    }
}
var item
function drawItem () {
    item = d3.selectAll('div')
    .data(data)

    item.enter()
    .append('div')
    .text(function (d) { return d })
    .style(mainStyle)

    item.exit().remove()
}
function AlgoAnim () {
    drawItem()
}

window.addEventListener('load', function () {
    var a = new AlgoAnim()
    console.log(a)
})
