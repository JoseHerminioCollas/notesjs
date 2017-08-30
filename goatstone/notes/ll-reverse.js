let hd = {d: 2, n: {d: 4, n: {d: 9, n: null}}} 

function rll(h) {
    let c = h
    let p = null
    let n = null
    while (c) {
        n = c.n // set the next
        c.n = p
        p = c
        c = n
        console.log(c)
    }
    h = p
    return h
}

console.log('xx', rll(hd) )

function Note () { return 1 }
module.exports = Note
