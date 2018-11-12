/*
 a portion of str1 characters can be rearranged to match str2
abcceff abc
abcde a
aabcccc abc
aaacaaaa aabc */
function scramble(str1, str2) {
    const str1A = str1.split('')
    const str2A = str2.split('')
    let count = 0
    const strLen = str2.length
    const [sig, score] = str2A.reduce((acc, c) => {
        if (!acc[0][c]) {
            acc[0][c] = 1
            acc[1][c] = 0
        } else {
            acc[0][c] += 1
        }
        return acc
    }, [{}, {}]) // signature, score
    for (let i = 0; i < str1A.length; i += 1) {
        const e = str1A[i]
        if (sig[e] && score[e] < sig[e]) {
            score[e] += 1
            count += 1
            if (count >= strLen) {
                return true
            }
        }
    }
    return false
}
const str1 = 'abcceff'
const str2 = 'abcc'
const str1A = 'abcceff'
const str2A = 'xabc'

const r1 = scramble(str1, str2)
const r = scramble(str1A, str2A)
console.log('x', r, r1)
//console.log(sig, strLen)
const x = () => 1
module.exports = [x, 'debug']
// radix sort  bin searc, walk trees DF BF
// bucket, throttle debounce
// LL promise async await
// Map Set map reduce filter array object
// is a string a palindrome
