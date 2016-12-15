import React from 'react'
import ReactDOM from 'react-dom'
import Rx from 'rx'
import events from 'events'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import App from 'goatstone/ui/material-app-demo'
const log = require('goatstone/log/log.js')
// import RenderMessage from 'goatstone/ui/render-message'
import RenderPO from 'goatstone/ui/popover.js'
import RenderSnackbar from 'goatstone/ui/render-snackbar.js'
const eventEmitter = new events.EventEmitter()
const messageStream = Rx.Observable.fromEvent(eventEmitter, 'message')
// RenderMessage('#message', messageStream)
const popoverStream = Rx.Observable.fromEvent(eventEmitter, 'popover')
RenderPO('#d', popoverStream, eventEmitter)

const logStream = Rx.Observable.merge(
  messageStream,
  popoverStream
)
logStream.subscribe(
  x => {
      log('logs', x)
  },
  err => log('e', err),
  () => log('c'))

RenderSnackbar('#snackbar', logStream)

// render the React application   <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
ReactDOM.render(
  <MuiThemeProvider>
  <App
    eventEmitter={eventEmitter}
  />
  </MuiThemeProvider>,
  document.getElementById('app')
)

// emit the initial events
eventEmitter.emit('message', {action: 'show', target: 'message', message: 'Welcome to Make A List'})
