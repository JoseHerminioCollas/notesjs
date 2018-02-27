import Rx from 'rx'
function rXEngine(start$, stop$, reset$, scriptArray){
    
    Rx.Observable.merge(
        start$.flatMapLatest(() =>
                             Rx.Observable
                             .interval(500)
                             .takeUntil(stop$)
                            ).map((x) => {
                                return scriptArray[x]
                            }),
        reset$.map(() => 0)
    )
    //        .filter(x => x > 0) // filter out the first event, TODO why does this fire? 
        .take(49)
    //        .scan((acc, n) => {
    //          console.log('scan: ', acc, n)
    //        return n === 0 ? 0 : acc + n
    //  })
        .subscribe(count => {
            console.log('count: ', count)
        });
}
export default rXEngine
