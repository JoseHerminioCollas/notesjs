const React = require('react')
const ReactDOM = require('react-dom')
const Rx = require('rx')
require('babel-polyfill')

const ArraySort = require('goatstone/ui/array-sort.js')
const Control = require('goatstone/ui/control.js')
const SelectionSort = require('goatstone/sort/selection.js')
const log = require('goatstone/log/log.js')

const arraySize = 3
const makeData = new (require('goatstone/tool/makeData.js'))()
let selectionSort = SelectionSort(makeData.getArray(arraySize))
const eventEmitter = new (require('events').EventEmitter)()

const starts = Rx.Observable.fromEvent(eventEmitter, 'start')
const stops = Rx.Observable.fromEvent(eventEmitter, 'stop')
const mousedownEvent = Rx.Observable.fromEvent(document, 'mousedown')
const mouseupEvent = Rx.Observable.fromEvent(document, 'mouseup')
const onOff = Rx.Observable.merge(
    starts.map(e => true),
    stops.map(e => false),
    mousedownEvent.map(e => false),
    mouseupEvent.map(e => true)
).startWith(true)
onOff.subscribe(
    x => log('on off', x),
    err => log('Observer error: ', err),
    () => log('Observer completed 1'))

Rx.Observable.timer(0, 1000)
    .pausable(onOff)
    .map((x) => {
        return selectionSort.next()
    })
    .subscribe((x) => {
        if (!x.done) {
            ReactDOM.render(
                <ArraySort
                array={x.value[0]}
                i={x.value[1]}
                minI={x.value[2]}
                style={require('goatstone/ui/style/container-element.js')}
                />,
                document.getElementById('c')
            )
        } else {
            eventEmitter.emit('stop')
            selectionSort = SelectionSort(makeData.getArray(arraySize))
            setTimeout(x => eventEmitter.emit('start'), 1000)
        }
    },
    (err) => log('Error: ' + err),
    () => log('Completed'))

ReactDOM.render(
    <Control
        start={x => eventEmitter.emit('start')}
        stop={x => eventEmitter.emit('stop')}
        style={require('goatstone/ui/style/control.js')}
    />,
    document.getElementById('d'))
