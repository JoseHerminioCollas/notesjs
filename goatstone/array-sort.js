/** goatstone.sort.insertion.js */
const React = require('react')
const ReactDOM = require('react-dom')
const Rx = require('rx')
const ArraySort = require('goatstone/ui/array-sort.js')
const Control = require('goatstone/ui/control.js')
const SelectionSort = require('goatstone/sort/selection.js')

const MakeData = require('goatstone/tool/makeData.js')
const makeData = new MakeData()
const selectionSort = SelectionSort(makeData.getArray(300))

var log = function (x) {
    const a = Array.from(arguments)
    console.log(...a)
}

const EventEmitter = require('events').EventEmitter
const eventEmitter = new EventEmitter()

const starts = Rx.Observable
.fromEvent(eventEmitter, 'start')
const starts1 = Rx.Observable
.fromEvent(document, 'mouseup')
const stops = Rx.Observable
.fromEvent(eventEmitter, 'stop')
const stops1 = Rx.Observable
.fromEvent(document, 'mousedown')

const onOff = Rx.Observable.merge(
    starts.map(e => true),
    stops.map(e => false),
    starts1.map(e => true),
    stops1.map(e => false)
).startWith(true)
onOff.subscribe(
    x => log('on off', x),
    err => log('Observer error: ', err),
    () => log('Observer completed 1')
    )

Rx.Observable.timer(0, 1000)
    .pausable(onOff)
    .map((x) => {
        return selectionSort.next()
    })
    .take(3000)
    .subscribe((x) => {
        if (!x.done) {
            ReactDOM.render(
                <ArraySort
                a={x.value[0]}
                i={x.value[1]}
                minI={x.value[2]}
                />,
                document.getElementById('c')
            )
        } else {
            eventEmitter.emit('data', false)
        }
    },
    (err) => {
        log('Error: ' + err)
    },
    () => {
        log('Completed')
    })

ReactDOM.render(
    <Control
        controls={{
            start: x => {
                eventEmitter.emit('start')
            },
            stop: x => {
                eventEmitter.emit('stop')
            }
        }}
        a={':'}
    />,
    document.getElementById('d')
)
