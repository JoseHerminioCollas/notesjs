
const Rx = require( 'rx' )
const cb = {
    err: err => { throw err },
    c: () => console.log('c')
}
//const iStream = Rx.Observable
//    .from([1,2,'xxxx'])
//    .map( x => {
//        return Rx.Observable.fromPromise( p( x ) )
//    } )
//    .map( x => {
//        return Rx.Observable.fromPromise( p( x ) )
//    } )
//    .flatMap(x => x)
//
//iStream.subscribe(
//    x=> {
//        console.log('a', x)
//    }, cb.err, cb.c )

var p1 = p(1)
p1.then(x=>{

    var p1 = p(1)
    p1.then(x=>{

        console.log('bbb',x)
    })

    console.log('aaa', x)
})

function p( x ) {
    console.log('p', x )
    const p = new Promise(
        function (res, rej) {
            setTimeout( (  ) => {
                //console.log('bbbba')
                res({a: 1})
            } , 1000 )
        }
    )
    return p
}
//p().then(x=>console.log('then'), x=>{}, x=>{})
