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
