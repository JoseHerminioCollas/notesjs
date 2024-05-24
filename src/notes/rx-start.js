import Rx from 'rxjs/Rx'
import EventEmitter from 'events'

// data
const arr = [33, 13, 23, 33, 34, 34]
const arr2 =[44, 55, 66]
// streams
const a$ = Rx.Observable
      .interval(100)
      .take(3)
      .map(x => `x ${x}`)
const b$ = Rx.Observable.from(arr)
const c$ = Rx.Observable.from(arr2)
const d$ = b$.merge(a$)
// subscribe
const subs = d$.subscribe(x => console.log(x))
// events
const e = new EventEmitter()
e.on('a', x => {
    subs.unsubscribe()
    console.log('e: ', x)
})

setTimeout(x => {
    e.emit('a', 3)
}, 1000)

// //
function Note () { return 1 }
module.exports = Note
