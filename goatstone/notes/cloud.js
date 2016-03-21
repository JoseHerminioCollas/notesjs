
const Rx = require( 'rx' )
function Cloud(){
    this.owKey = 'abc'
}
Cloud.prototype.weather = function(){
    return new Promise( function (resolve, reject) {
        resolve( 1 )
    } )
}
Cloud.prototype.twitter = function(){
    return new Promise( function ( resolve, reject ) {
        resolve( 100 )
    } )
}
const cloud = new Cloud( { owKey: 'abc' } )

new Rx.Observable.fromPromise( cloud.weather() )
    .subscribe(
        (x) => {
            console.log('Value published to observer #1: ' + x)
        },
        (e) => { console.log('onError: ' + e.message) },
        () => { console.log('onCompleted') })

