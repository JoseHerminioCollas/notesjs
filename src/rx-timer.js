import Rx from 'rx'
let a = Array.from(new Array(100))
    .map((x, i) => (i))
let f = function () {
    let d = 500
    let inc = 25
    let mult = 1
    let max = 1500
    let min = 100
    return function () {
        mult = (d < min || d > max) ? mult * -1 : mult
        d = d - (inc * mult)
        return d
    }
}
let g = f()
Rx.Observable
    .from(a)
    .map(v => Rx.Observable.return(v).delay(g()))
    .concatAll()
    .subscribe(x => {
        console.log('- ', x)
    })
//
function Note () { return 1 }
module.exports = Note
