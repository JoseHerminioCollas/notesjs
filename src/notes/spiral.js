// const log = require('goatstone/log/log')
var spiralize = function (size) {
    return walkArray(makeArray(size))
}
spiralize(5)
// console.log('a', a)
function makeArray (size) {
    const arraySize = size
    let m = []
    for (let i = 0; i < arraySize; i++) {
        m[i] = []
        for (let j = 0; j < arraySize; j++) {
            m[i][j] = 0
        }
    }
    return m
}
// const m = makeArray(7)
function updateArr (arr, i, j) {
    if (!arr[i]) throw new Error('i does not exist')
    if (!arr[j]) throw new Error('j does not exist')
    arr[i][j] = 1
}
function walkArray (m) {
    const RIGHT = 0
    const LEFT = 1
    const UP = 2
    const DOWN = 3
    let currentDir = RIGHT
    let currentCell = [0, 0]
    let blockedExits = 0
    while (true) {
        // console.log('----', blockedExits)
        if (blockedExits >= 2) {
            return m
        }
        blockedExits = 0
        updateArr(m, ...currentCell)
        if (currentDir === RIGHT) {
            if (
              !m[currentCell[1] + 1] ||
              m[currentCell[0]][currentCell[1] + 2] === 1
            ) {
                currentDir = DOWN
                blockedExits++
            } else {
                currentCell[1]++
            }
        }
        if (currentDir === DOWN) {
            if (
              !m[currentCell[0] + 1] ||
              (m[currentCell[0] + 2] &&
                m[currentCell[0] + 2][currentCell[1]] === 1)
            ) {
                currentDir = LEFT
                blockedExits++
            } else {
                currentCell[0]++
            }
        }
        if (currentDir === LEFT) {
            if (!(m[currentCell[1] - 1]) ||
                (m[currentCell[0]][currentCell[1] - 2] &&
                  m[currentCell[0]][currentCell[1] - 2])
            ) {
                currentDir = UP
                blockedExits++
            } else {
                currentCell[1]--
            }
        }
        if (currentDir === UP) {
            if (
              !(m[currentCell[0] - 1]) ||
              m[currentCell[0] - 2][currentCell[1]] === 1
            ) {
                currentDir = RIGHT
                blockedExits++
            } else {
                currentCell[0]--
            }
        }
    }
}
