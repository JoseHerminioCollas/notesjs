const Rx = require('rx')

let a = Array.from(new Array(50))
    .map((x, i) => (i))
let f = function () {
    let d = 100
    let inc = 200
    let mult = 1
    let max = 3500
    let min = d
    return function () {
        mult = (d < min || d > max) ? mult * -1 : mult
        d = d + (inc * mult)
        return d
    }
}
const colors = ['red', 'green', 'blue']
let level = 0
let color = 0
let g = f()
let subs
function rep3 () {
  return Rx.Observable
      .from(a)
      .map(v => Rx.Observable.return(v).delay(g()))
      .concatAll()
}
function rep4 () {
  Rx.Observable
      .from(a)
      .map(v => Rx.Observable.return(v).delay(g()))
      .concatAll()
      .subscribe(x => {
        client.publish('feather-one:light:red', (level).toString())
        client.publish('feather-one:light:green', (level).toString())
        // client.publish('feather-one:light:blue', (level).toString())
        level = (level <= 0)? 200: 0
        console.log('xxxxx', level)
      },
      x => console.log('aa', x),
      x => {
        rep4()
        // console.log('bbb', x)
      })
}

module.exports = rep3

// chase effect
function chaseEffect(chaseEngine, colorEvent){
  let cESub = chaseEngine()
  const colors = ['red', 'green', 'blue']
  let level = 0
  let color = 0
  cESub.subscribe( x => {
    colorEvent.emit(colors[color], level )
    color = (color >= colors.length - 1)? 0 : color + 1
    level = (color <= 0)? Math.abs(level - 150) : level
  })
}
