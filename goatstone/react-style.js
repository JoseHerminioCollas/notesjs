import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import renderPO from 'goatstone/ui/popover.js'
import renderMessage from 'goatstone/ui/render-message'
import App from 'goatstone/ui/material-app-demo'
injectTapEventPlugin()

ReactDOM.render(
  <MuiThemeProvider>
  <App />
  </MuiThemeProvider>,
  document.getElementById('app')
)

renderMessage('#message', 'Hello World')
renderPO(null, true)
