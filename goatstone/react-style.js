import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import renderPO from 'goatstone/ui/popover.js'
import renderMessage from 'goatstone/ui/render-message'
import App from 'goatstone/ui/material-app-demo'
import Rx from 'rx'
import events from 'events'
const eventEmitter = new events.EventEmitter()
// msg = MessageRender(DOMElement)
// msg({message: 'hello'})
const log = require('goatstone/log/log.js')
const messageStream = Rx.Observable.fromEvent(eventEmitter, 'message')
messageStream.subscribe(
  x => {
      renderMessage('#message', 'Hello Stream!!!')
  },
  err => log('e', err),
  () => log('c'))
const popoverStream = Rx.Observable.fromEvent(eventEmitter, 'popover')
popoverStream.subscribe(
  x => {
      if (x.e) x.e.preventDefault() // This prevents ghost click.
      renderPO(x.show)
  },
  err => log('e', err),
  () => log('c'))
const logStream = Rx.Observable.merge(messageStream, popoverStream)
logStream.subscribe(
  x => {
      log('logs', x)
  },
  err => log('e', err),
  () => log('c'))

ReactDOM.render(
  <MuiThemeProvider>
  <App
    eventEmitter={eventEmitter}
  />
  </MuiThemeProvider>,
  document.getElementById('app')
)

eventEmitter.emit('popover', {show: false, target: 'popover'})
eventEmitter.emit('message', {action: 'show', target: 'message', message: 'INIT'})
