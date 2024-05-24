import Rx from 'rx'
import xs from 'xstream'
import EventEmitter from 'events'

const arr = [1, 2, 3, 4, 4]
const a = Rx.Observable.interval(1000)
const b = xs.from([1, 2])
const out = a.map(x => x + 'xx')

const subs = a.subscribe(x =>
              console.log(x)
           )
//subs.unsubscribe() ////
// events
const e = new EventEmitter()
e.on('a', x =>
     (
      //aUnsub.unsubscribe(), //
      console.log('ee: e, a', out)
     )
    )
e.emit('a', 1)

console.log('subs = = = = ==== - ', subs)
setTimeout(x => {
    console.log('subs', subs)
    subs.unsubscribe()    
}, 1000)


console.log('a', out)
// //
function Note () { return 1 }
module.exports = Note
