let arr = [1, 3, 32, 5, 654, 33, 2, 1, 4545, 4]
// radix                                                                        
function bs(arr) {
    let l = 0
    let r = arr.length - 1
    const digitL = String(Math.max(...arr)).length
    let digitI = digitL - 1
    while (digitI >= 0) {
        const cA = Array.from(Array(10)).map(() => [])
        arr.forEach(e => {
            // get the digitI of the number                                     
            const fullArrN = Array.from(Array(digitL)).map(() => 0)
            const arrN = String(e).split('')
            const arrNL = arrN.length
            fullArrN.splice(-arrNL, arrNL, ...arrN)
            cA[ fullArrN[digitI] ].push(e)
        })
        arr.splice(0, arr.length, ...([].concat(...cA)))
        digitI = digitI - 1
    }
}

bs(arr)
console.log(arr)
