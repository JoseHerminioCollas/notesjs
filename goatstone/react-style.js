import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import RenderPO from 'goatstone/ui/popover.js'
import App from 'goatstone/ui/material-app-demo'
import Rx from 'rx'
import events from 'events'
const log = require('goatstone/log/log.js')
import RenderMessage from 'goatstone/ui/render-message'

const eventEmitter = new events.EventEmitter()
const renderMessage = RenderMessage('#message')
const renderPO = RenderPO('#d')

// streams
const streams = {
    message: Rx.Observable.fromEvent(eventEmitter, 'message'),
    popover: Rx.Observable.fromEvent(eventEmitter, 'popover')
}
streams.log = Rx.Observable.merge(
  streams.message,
  streams.popover
)
streams.message.subscribe(
  x => {
      renderMessage(x.message)
  },
  err => log('e', err),
  () => log('c'))
streams.popover.subscribe(
  x => {
      renderPO(x.show)
  },
  err => log('e', err),
  () => log('c'))
streams.log.subscribe(
  x => {
      log('logs', x)
  },
  err => log('e', err),
  () => log('c'))

// render that React app
ReactDOM.render(
  <MuiThemeProvider>
  <App
    eventEmitter={eventEmitter}
  />
  </MuiThemeProvider>,
  document.getElementById('app')
)

// emit the initial events
eventEmitter.emit('popover', {show: true, target: 'popover'})
eventEmitter.emit('message', {action: 'show', target: 'message', message: 'INIT'})
