const Rx = require('rx')

const t = Rx.Observable.timer(0, 1000).take(13)
const t1 = Rx.Observable.from([1, 2, 3, 4, 5, 6])
const ts = Rx.Observable.combineLatest(t, t1)

const animO = [{ 'device:{prop:value,prop:value}': 1 }, { "b": 4 }, { "c": 5 }]
var t2 = Rx.Observable
    .from(animO)
    .map(function(value) { return Rx.Observable.return(value).delay(2000) })
    .concatAll()
    .repeat()

//t2.subscribe(value => console.log(value));

Rx.Observable.from([1, 2, 3, 4, 5])
    .zip(Rx.Observable.timer(0, 2000), x => x)
    .subscribe(x => console.log(x))

/*
Rx.Observable.fromArray([e, 12, 13, 14])
    .timer(1000, 1000)
    .map(x => 'x')
    .take(3)
    .subscribe(
    function (x) {
        console.log('Nextx: ' + x)
    },
    function (err) {
        console.log('Error: ' + err)
    },
    function () {
        console.log('Completed')
    }
)

var stuff = Rx.Observable.from(
    [1, 2, 3]
).flatMap(function (value) {
    return Rx.Observable.from(
        [value, value + 10]
    ).map(function (value) {
        return value * value
    }).delayWithSelector(function (value) {
        return Rx.Observable.timer(value / 5)
    })
})

stuff.subscribe(
    function (x) {
        console.log('Next: ' + x)
    },
    function (err) {
        console.log('Error: ' + err)
    },
    function () {
        console.log('Completed')
    }
)
function doStuffForItem (item, value, v2) {
    return Rx.Observable()
    .map()
    .flatMap()
    .filter(function (enhancedItem) {
        return enhancedItem.v3 > value
    })
}

Rx.Observable()
.get()
.flatMap(function (x) {
    return doStuffForItem(x.item, x.v1, x.v2)
})

const cities = ['new-york', 'paris', 'rome', 'london']
const delay = 100
const period = 1000
const cityStream = Rx.Observable.timer(delay, period)
    .map(i => cities[ i ])
    .take(cities.length)

cityStream
    .subscribe(
        (x) => {
            console.log('Next: ' + x)
        },
        err => { throw err }, () => console.log('Completed')
        )
*/

// const eventSource = Rx.Observable
// .fromEvent(eventEmitter, 'data')
// // .map(x => ['xxxxxxxxxx', x])
// eventSource
// .subscribe(
//     x => log('---', x),
//     err => log('Observer error: ', err),
//     () => log('Observer completed 1')
//     )
// eventEmitter.emit('data', false)

// var observer = Rx.Observer.create(
//     x => log(x),
//     err => log('Observer error: ', err),
//     () => log('Observer completed 1')
//     )

// // observer.onNext(412)

// const source = Rx.Observable.create(o => {
//     o.onNext(1111)
//     a()
//     function a () {
//         o.onNext(new Date())
//         setTimeout(a, 3000)
//     }
// })
// .map(x => { return [x, 1] })
// .take(1)

//  source.subscribe(observer)