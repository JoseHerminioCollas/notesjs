const arr = [1, 3, 32, 5, 654, 33, 2, 1, 4545, 4]

for(let i = 1; i < arr.length; i++) {
    let v = arr[i]
    let j
    for(j = i - 1; j >= 0, v < arr[j]; j--){
        arr[j + 1] = arr[ j ]
    }
    arr[j + 1] = v
    console.log('x', j)
}
console.log(arr)
const x = () => arr
