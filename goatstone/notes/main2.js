/* main.js */

var p = new Permutations(2, "abcd");
var oORes = p.generate([],[],0  );

var a = [4, 1, 5, 7, 9, 10, 44, 444];
var s = 'abcrabc';
pal(s, s.length );
function pal(s, l) {    // string, full length
    var sl = Math.floor( l/2 ); // sl section length
    var iter = s.length - l;
    var start = 0;
    for(var i=0; i<=iter; i++){
        start = i;
        var ls =  s.substr(start, sl); // left string
        var rs =  s.substr( (start+l- sl), sl); //right string
        console.log(ls , rs);
        if( ls === rs ){
            console.log('match', ls, rs);
        }
    }
    if (l > 2) {
        l--;
        pal(s, l);
    }
}
'use strict'
const arr  = [8,6,5,3,1]
const out = []
for(let i = 0; i < arr.length; i++){
    var minI = i
    for( let j= i + 1; j< arr.length; j++){
        if( arr[ j ] < arr[ minI ] ){
            minI = j
        }
    }
    const t = arr[ i ]
    arr[ i ] = arr[ minI ]
    arr [ minI ] = t
}

console.log('z', arr )