function greatestCommonDivisor (a, b) {
    var divisor = 2
    var greatestDivisor = 1
    if (a < 2 || b < 2) {
        return greatestDivisor
    }
    while (a >= divisor && b >= divisor) {
        if (a % divisor === 0 && b % divisor === 0) {
            greatestDivisor = divisor
        }
        divisor++
    }
    return greatestDivisor
}
let a = greatestCommonDivisor(14, 21)
var b = greatestCommonDivisor(69, 169)
var c = greatestCommonDivisor(12, 30)

console.log('a', a, b, c)

/*
 function greatestCommonDivisor(a, b){
 if(b == 0)
 return a;
 else
 return greatestCommonDivisor(b, a%b);
 }
 */
