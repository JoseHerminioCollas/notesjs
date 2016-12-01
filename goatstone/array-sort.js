/** goatstone.sort.insertion.js */
const React = require('react')
const ReactDOM = require('react-dom')
const Rx = require('rx')
const ArraySort = require('goatstone/ui/array-sort.js')
const Control = require('goatstone/ui/control.js')
const SelectionSort = require('goatstone/sort/selection.js')

const MakeData = require('goatstone/tool/makeData.js')
const makeData = new MakeData()
const selectionSort = SelectionSort(makeData.getArray(200))
const controlStream = new Rx.Subject()
.subscribe(function (data) {
    console.log('data ::: ' + data)
})
Rx.Observable.timer(0, 1000)
    .timeInterval()
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
        }
    },
    (err) => {
        console.log('Error: ' + err)
    },
    () => {
        console.log('Completed')
    })
ReactDOM.render(
    <Control
        func={x => {
            controlStream.onNext('foo')
        }}
        a={':'}
    />,
    document.getElementById('d')
)
