
var arr = [2, 1, 5, 56, 55, 66, 1, 123, 2, 12 ]

function buckS( arr ){
    var bucketCount = 15
    var buckets = []
    var minV = Math.min( ...arr );
    arr.forEach( ( e ) => {
        var bI = Math.floor( ( e - minV ) / bucketCount );
        ( buckets[ bI ] || ( buckets[ bI ] = [] ) ).push( e )

    })
    return buckets.reduce( ( pe, e ) => {
        e.sort( ( a, b ) => a - b )
        return pe.concat( e )
    }, [] )
}
var bsa = buckS( arr )
console.log('--',   arr )
console.log('xx', bsa )
