/* goatstone.remote.async-samples */
const async = require( 'async' )

var users = [];
async.series([
    a, b, c
]);
function a( cb ){
    cb()
    console.log( 11111, cb )
}
function b( cb ){
    cb()
    console.log( 2, cb )
}
function c( cb ){
    cb()
    console.log( 333, cb )
    return 2;
}