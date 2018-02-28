// radix sort

function radixS (arr) {
    let countArr = []
    let numArr = []
    let numWordL = String(Math.max(...arr)).length
    let numI = numWordL - 1
    while (numI >= 0) {
        countArr = Array.from(Array(10)).map(() => [])

        arr.forEach(n => {
            numArr = Array.from(String(n).split(''))
            numArr.unshift(...Array(numWordL - numArr.length).fill(0))
            let countArrI = numArr[numI]
            countArr[countArrI].push(n)
        })
        arr.splice(0)
        countArr.forEach(cAE => {
            arr = arr.concat(cAE)
        })
        numI--
    }
    return arr
}

export default radixS
