import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import Paper from 'material-ui/Paper'
const log = require('goatstone/log/log.js')
import Snackbar from 'material-ui/Snackbar'

function renderMessage (DOMElement, stream) {
    stream.subscribe(
      x => {
          const displayArr = []
          Object.keys(x).forEach((e, i) => {
              displayArr.push(x[e])
              displayArr.push(e)
          })
          console.log('sss', displayArr.join(' '))
          r(displayArr.join(' '))
      },
      err => log('e', err),
      () => log('c'))
    var de = DOMElement
    function r (msg) {
        ReactDOM.render(
            <MuiThemeProvider>
            <Snackbar
              open={true}
              message={msg}
              autoHideDuration={4000}
              onRequestClose={x => 1}
            />
            </MuiThemeProvider>,
            document.querySelector(de)
        )
    }
}
export default renderMessage

// <Paper style={pStyle.paper}
//        zDepth={4}
//        circle={false}>
//     {msg} : {new Date().getSeconds()}
// </Paper>
