const React = require('react')
const ReactDOM = require('react-dom')

var A = require('goatstone/ui/a.js')
var B = require('goatstone/ui/b.js')
var C = require('goatstone/ui/c.js')

ReactDOM.render(
    <A />,
    document.getElementById('a')
)
ReactDOM.render(
    <B />,
    document.getElementById('b')
)
ReactDOM.render(
    <C />,
    document.getElementById('c')
)
