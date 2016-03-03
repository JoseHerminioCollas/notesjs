/* goatstone.notes.generator.js */
var s = 'abcccc'
var a = [33,3,345,6,8,1,1,1,1,6,3,87,5,7,2,2,222  ]
function* iterMaker( d ){
    // bucket sort // put into buckets and sort in bucket
    // radix, quick shell heap bubble 
    for(var i=0; i < a.length; i++){
        for(var j= i+1; j < a.length; j++){
            if( a[i] < a[j]){// swap
                var t = a[j]
                a[j] = a[i]
                a[i] = t
                yield a
            }
        }
    }

}
 
module.exports = iterMaker
