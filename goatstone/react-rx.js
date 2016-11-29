const React = require('react')
const ReactDOM = require('react-dom')
const Rx = require('rx')
const A = require('goatstone/ui/a.js')
const B = require('goatstone/ui/b.js')
const C = require('goatstone/ui/c.js')
const D = require('goatstone/ui/d.js')

const subject = new Rx.Subject()

subject.subscribe(function (data) {
    console.log('data: ' + data)
})
subject.onNext('react-rxxx')

const source = Rx.Observable.timer(200, 3000)
    .timeInterval()
    .map(function (x) { return x.value + ':' + x.interval })
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
