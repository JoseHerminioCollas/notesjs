// radix
let arr = [109, 32, 4, 37, 55, 37, 88, 44, 76, 76, 79, 77, 900, 898222]
function rs (a) {
    let dL = Math.max(...a).toString(10).length
    let dI = dL - 1
    let ca = []
    let caI
    while (dI >= 0) {
        ca = Array.from(Array(10)).map(x => [])
        a.forEach(n => {
            let arrZ = Array.from(new Array(dL)).fill(0)
            let nArr = Array.from((n).toString(10))
            arrZ.splice(arrZ.length - nArr.length, nArr.length, ...nArr)
            caI = parseInt(arrZ[dI])
            ca[caI].push(parseInt(nArr.join('')))
        })
        a.splice(0)
        ca.forEach(arr => {
            a.push(...arr)
        })
        dI--
    }
    return a
}
console.log('xxx', rs(arr))

function Note () { return 1 }
module.exports = Note
