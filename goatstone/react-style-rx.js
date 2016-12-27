import React from 'react'
import ReactDOM from 'react-dom'
// import Rx from 'rx'
// import events from 'events'
import App from 'goatstone/ui/material-app-demo'
// const log = require('goatstone/log/log.js')
// const eventEmitter = new events.EventEmitter()
// const messageStream = Rx.Observable.fromEvent(eventEmitter, 'message')
// const logStream = Rx.Observable.merge(
//   messageStream
//   // ,
//   // popoverStream
// )
// logStream.subscribe(
//   x => {
//       log('logs', x)
//   },
//   err => log('e', err),
//   () => log('c'))
ReactDOM.render(
    <App />,
  document.getElementById('app')
)
