

// quick                                                                            
const swap = (arr, a, b) => {
    const t = arr[a]
    arr[a] = arr[b]
    arr[b] = t
}
const partition = (arr, pivotI, lowI, highI) => {
    let partitionI = lowI
    for(let i = lowI; i < highI; i += 1){
        if(arr[i] < arr[pivotI]){
            swap(arr, i, partitionI)
            console.log(i, partitionI)
            partitionI += 1
        }
    }
    swap(arr, pivotI, partitionI)
    return partitionI
}
const qs = (arr, low, high) => {
    if (low < high) {
        const pivot = high
	const pI = partition(arr, pivot, low, high)
        // partition(arr, low, pI - 1)                                              
        // partition(arr, pI + 1, high)                                             
        console.log(pI)
        // qs(arr,  )                                                               
    }
}

const arr2 = [11, 3, 32, 5, 654, 33, 2, 1, 4545, 4]
qs(arr2, 0, arr2.length - 1)

const x = () => 1

module.exports = [() => x(), partition, qs, swap, arr2]

///

const { expect } = require('chai')
const [func, partition, qs, swap, arr] = require('../goatstone/notes/note')

describe('Notes Test', () => {
    describe('partition', () => {
        it('should be partitioned, vals on correct side of pivot', () => {
            //const a = [2, 3, 1, 33, 222, 333]                                     
            a = arr
            const pivot = arr.length - 1
            const pI = partition(a, pivot, 0, a.length - 1)
            // const pI = 3                                                         
            const lMax = Math.max(...a.slice(0, pI))
            const rMin = Math.min(...a.slice(pI + 1))
            console.log('xxx', a, pI)
            expect(lMax).to.be.below(a[pI])
            expect(rMin).to.be.above(a[pI])
        })
    })
    describe('swap', () => {
        it('it should swap given args in array', () => {
            let arr = [1, 3]
            // arr = [3, 1]                                                         
            swap(arr, 0, 1)
            expect(arr).to.deep.equal([3, 1])
        })
    })
>>>>>>> 564806922abb0e4f23310a0e17c9234fd3e69d13
