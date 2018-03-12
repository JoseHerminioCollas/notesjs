
const a = [ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]
const b = [ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]
const c = [ '    ', 'a', ' ' ]
//
function findUniq (arr) {
    let repeatedCharSig = findRepChar(arr)
    let finalValue = arr.filter(e => {
        return makeSignature(e) !== repeatedCharSig
    })
    return finalValue[0]
}
function findRepChar (arr) {
    let repeatedCharSig
    let isFound = false
    let index = 0
    let firstV, lastV
    const sigs = arr.map(makeSignature)
    while (!isFound && index < arr.length - 1) {
        firstV = sigs.indexOf(sigs[index])
        lastV = sigs.lastIndexOf(sigs[index])
        if (firstV !== lastV) {
            repeatedCharSig = sigs[firstV]
            isFound = true
        }
        if (index >= sigs.length) throw Error('No repeating characters found!')
        index++
    }
    return repeatedCharSig
}
function makeSignature (e) {
    const arrA = String(e).toLowerCase().split('')
    arrA.sort((a, b) => {
        if (a < b) {
            return -1
        }
        if (a > b) {
            return 1
        }
        return 0
    })
    return (Array.from(new Set(arrA))).join('')
}

function Note () {
    const r = findUniq(a)
    console.log(r)
    const r1 = findUniq(c)
    console.log(r1)
}
module.exports = Note
