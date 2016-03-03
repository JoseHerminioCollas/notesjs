
// palindrome, string manipulation, regex test exec
// prime #s closures array methods, walk DOM, i, s sorting


function pal(s){
        var shl = Math.floor(s.length/2);
        var s1 = s.substr(0, shl);
        var s2 = s.substr(-shl ).split("").reverse().join("");
        if( s1 === s2 ){
            console.log('is palindrome', s1, s2);
        }
}

var r = pal('aabbaa');
console.log('p', r);