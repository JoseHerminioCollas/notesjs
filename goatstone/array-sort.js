/** goatstone.sort.insertion.js */
const React = require('react')
const ReactDOM = require('react-dom')
const Rx = require('rx')
const ArraySort = require('goatstone/ui/array-sort.js')
const Control = require('goatstone/ui/control.js')
const SelectionSort = require('goatstone/sort/selection.js')

const selectionSort = SelectionSort()

const subject = new Rx.Subject()
subject.subscribe(function (data) {
    console.log('data ::: ' + data)
})

Rx.Observable.timer(200, 1000)
    .timeInterval()
    .map((x) => { return selectionSort.next() })
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
            console.log('click', x)
            subject.onNext('foo')
        }}
        a={':'}
    />,
    document.getElementById('d')
)
