
const Rx = require( 'rx' )

var interval = Rx.Observable.interval(1000)

var source = interval
    .take(2)
    .doAction(function (x) {
        console.log('Side effect')
    })

source.subscribe( x => {
    console.log(11)
} )
const Rx = require('rx')
const cb = {
    err: err => {console.log(err)},
    c: () => console.log('c')
}
const iStream = Rx.Observable
    .range(1, 5)
    .map(x => {
        return Rx.Observable.fromPromise(p())
    })
    .flatMap(x=>x)
//.flatMap(x=>x )
iStream.subscribe(
    x=> {
        console.log('a', x)
    }, cb.err, cb.c )
const intervalStream = Rx.Observable.fromPromise(p())
intervalStream.subscribe(x=> {
    console.log('>>>>', x)
}, cb.err, cb.c )

function p() {
    const p = new Promise(
        function (res, rej) {
            setTimeout(x => {
                res({a:1})
            }, 2000 )
        }
    )
    return p
}
//p().then(x=>console.log('then'), x=>{}, x=>{})
