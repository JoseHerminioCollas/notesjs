import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
const pStyle = {
    paper: {
        width: '200px',
        display: 'inline-block',
        margin: '16px 32px 16px 0',
        padding: '1em'
    },
    rightIcon: {
        textAlign: 'center',
        lineHeight: '24px'
    }
}
function renderMessage (DOMElement) {
    var de = DOMElement
    return function (msg) {
        ReactDOM.render(
            <MuiThemeProvider>
                <Paper style={pStyle.paper}
                       zDepth={4}
                       circle={false}>
                    aaaa{msg} : {new Date().getSeconds()}
                </Paper>
            </MuiThemeProvider>,
            document.querySelector(de)
        )
    }
}
export default renderMessage
