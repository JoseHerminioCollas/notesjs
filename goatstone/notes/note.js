// const eventSource = Rx.Observable
// .fromEvent(eventEmitter, 'data')
// // .map(x => ['xxxxxxxxxx', x])
// eventSource
// .subscribe(
//     x => log('---', x),
//     err => log('Observer error: ', err),
//     () => log('Observer completed 1')
//     )
// eventEmitter.emit('data', false)

// var observer = Rx.Observer.create(
//     x => log(x),
//     err => log('Observer error: ', err),
//     () => log('Observer completed 1')
//     )

// // observer.onNext(412)

// const source = Rx.Observable.create(o => {
//     o.onNext(1111)
//     a()
//     function a () {
//         o.onNext(new Date())
//         setTimeout(a, 3000)
//     }
// })
// .map(x => { return [x, 1] })
// .take(1)

//  source.subscribe(observer)
