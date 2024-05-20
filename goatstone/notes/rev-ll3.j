let hd = {d: 1, n: {d: 2, n: {d: 3, n: null}}} 

function rll(h) {
    let a = h // a
    let b = null // b
    let t = null // t
    while (a) {
        console.log('aa', a);
        console.log(b)
        console.log(t)
        t = a.n // set the next
        a.n = b
        b = a
        a = t
        console.log('a', a)
        console.log(b)
        console.log(t)
    }
    h = b
    return h
}
;
console.log('xx', rll(hd) )

function f() {
    return 1
}
module.exports = [f, 'bt']
