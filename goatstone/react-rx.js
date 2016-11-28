const React = require('react')
const ReactDOM = require('react-dom')
var Rx = require('rx')
var A = require('goatstone/ui/a.js')
var B = require('goatstone/ui/b.js')
var C = require('goatstone/ui/c.js')
var D = require('goatstone/ui/d.js')

var subject = new Rx.Subject()

subject.subscribe(function (data) {
    console.log('data: ' + data)
})
subject.onNext('react-rx')

var source = Rx.Observable.timer(200, 3000)
    .timeInterval()
    .map(function (x) { return x.value + ':' + x.interval })
    .pluck('interval')
    .take(3000)

ReactDOM.render(
    <A />,
    document.getElementById('a')
)
ReactDOM.render(
    <B />,
    document.getElementById('b')
)

source.subscribe(
    function (x) {
        ReactDOM.render(
            <C a={x} />,
            document.getElementById('c')
        )
    },
    function (err) {
        console.log('Error: ' + err)
    },
    function () {
        console.log('Completed')
    })

ReactDOM.render(
    <D
        func={x => {
            console.log('click', x)
            subject.onNext('foo')
        }}
        a={'aaaa'}
    />,
    document.getElementById('d')
)
