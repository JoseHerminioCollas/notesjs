const React = require('react')
const ReactDOM = require('react-dom')
var A = require('goatstone/ui/a.js')
var B = require('goatstone/ui/b.js')
var C = require('goatstone/ui/c.js')
var D = require('goatstone/ui/d.js')

ReactDOM.render(
    <A />,
    document.getElementById('a')
)
ReactDOM.render(
    <B />,
    document.getElementById('b')
)
ReactDOM.render(
    <C a={123} />,
    document.getElementById('c')
)
ReactDOM.render(
    <D
        func={x => {
            console.log('click', x)
        }}
        a={'aaaa'}
    />,
    document.getElementById('d')
)
ReactDOM.render(
    <div>div </div>,
    document.querySelector('.a')
)
