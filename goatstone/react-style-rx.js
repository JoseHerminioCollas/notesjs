import React from 'react'
import ReactDOM from 'react-dom'
import Rx from 'rx'
import App from 'goatstone/ui/material-app-demo'
const log = require('goatstone/log/log.js')
// events
import events from 'events'
const eventEmitter = new events.EventEmitter()
const dialogStream = Rx.Observable.fromEvent(eventEmitter, 'dialog')
const messageStream = Rx.Observable.fromEvent(eventEmitter, 'message')
const listStream = Rx.Observable.fromEvent(eventEmitter, 'list')
const logStream = Rx.Observable.merge(messageStream, dialogStream, listStream)
logStream.subscribe(x => {
    log('logs', x)
}, err => log('e', err), () => log('c'))

ReactDOM.render(
    <App
      eventEmitter={eventEmitter}
      dialogStream={dialogStream}
      messageStream={messageStream}
      listStream={listStream}
    />,
  document.getElementById('app')
)
