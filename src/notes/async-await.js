/* eslint unexpected-token-function: 0 */  // --> OFF
// let a = [-1, 3, -4, 5, 1, -6, 2, 1]

function p () {
    return new Promise((resolve, reject) => {
        setTimeout(x => resolve(3), 1000)
    })
}

p().then(x => {
    console.log(x)
})

async function a () {
    let b = await p()
    return b
}

a().then(x => {
    console.log('zzz', x)
 })

function Note () { return 1 }
module.exports = Note

