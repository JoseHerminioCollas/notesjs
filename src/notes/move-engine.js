function moveEngine(startEvent, stopEvent, resetEvent){
    startEvent.emit('data', 'a');
    setTimeout(x => {
        console.log('timeout')
        stopEvent.emit('data', 'b')
    }, 4000 )
    setTimeout(x => {
        console.log('timeout')
        startEvent.emit('data', 'c');
    }, 6000 )
    setTimeout(x => {
        console.log('timeout')
        stopEvent.emit('data', 'foo');
    }, 8000 )
}
export default moveEngine
