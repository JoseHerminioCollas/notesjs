/* permutation with repetition
 n choose r
 3 choose 3
 10 choose 3 : 0-9 n, into a set of 3 num of Perms 10^3 n^r
 10 numbers to choose from and we choose 3
 */

var arr = [1, 2, 3]
function combs (arr) {
    return Math.pow(3, 3)
}

var r = combs(arr)
// param fact fact! return factorial
function fact (n) {
    var res = n
    while (n > 1) {
        res = res * (n - 1)
        n--
    }
    return res
}
// n! / r! (n-r)!
var rr = fact(4)
console.log('x', rr)
// function bico (n, r) {
//     return fact(n) / (fact(r) * fact(n-r))
// }
// var a = bico(4, 3) // 16 choose 3
// console.log('a', a)
