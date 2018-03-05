////
const a = [ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]
const b = [ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]

function findUniq (arr) {
    let repeatedCharSig = findRepChar(arr)
    let finalValue = arr.filter(e => {
        const a = makeSignature(e)
        return a !== repeatedCharSig
    })
    return finalValue[0]
}
function findRepChar (arr) {
    let repeatedCharSig
    let isFound = false
    let index = 0
    const sigs = arr.map(makeSignature)
    while (!isFound) {
        const lastI = sigs.lastIndexOf(sigs[index])
        const firstI = sigs.indexOf(sigs[index])
        if (lastI !== firstI) {
            repeatedCharSig = sigs[index]
            isFound = true
        }
        if (index >= sigs.length) throw Error('no repeating characters found!')
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
    const setA = new Set(arrA)
    const arrB = Array.from(setA)
    const strA = arrB.join('')
    return strA
}

function Note () {
    const r = findUniq(a)
    const r1 = findUniq(b)
    console.log(r)
    console.log(r1)
}
module.exports = Note
