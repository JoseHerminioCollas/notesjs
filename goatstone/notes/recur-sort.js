
// insertion

var arr = [3, 5, 562, 1, 12, 44, 55]
var str = 'abckdefghig'

function rF( i ){

    console.log( i, arr[ i ] )
    var minI = i

    for( var j = i+1; j < arr.length; j++ ){
        if( arr[ minI ] > arr[ j ] ){
            minI = j
        }
    }
    var t = arr[ i ]
    arr[ i ] = arr[ minI ]
    arr[ minI ] = t

    console.log( 'xxxx',arr.length)
    i++
    if( i < arr.length ){
        rF( i )
    }
    else console.log( arr )
}

rF( 0 )

/*
 * 5 people source point , each person can m25 UK shortest path problem
 * */