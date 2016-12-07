import React from 'react'
import ReactDOM from 'react-dom'
import Popover from 'material-ui/Popover/Popover'
import {Menu, MenuItem} from 'material-ui/Menu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const log = require('goatstone/log/log.js')

const PO = props => (
    <MuiThemeProvider>
        <Popover
            open={props.isVisible}
            anchorEl={props.targetElement}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
            onRequestClose={x => {
                props.close()
            }}>
            <Menu>
                <MenuItem
                    onTouchTap={x => {
                        props.close()
                    }}
                    primaryText="Refreshxxxx" />
                <MenuItem primaryText="Help &amp; feedback" />
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Sign out" />
            </Menu>
        </Popover>
    </MuiThemeProvider>
)
function renderPO (elementName, stream) {
    stream.subscribe(
        x => {
            a(x.show)
        },
        err => log('e', err),
        () => log('c'))

    const eName = elementName
    function a (isV) {
        ReactDOM.render(
          <PO
          close={x => {
              a(false)
          }}
          isVisible={isV}
          targetElement={document.querySelector('#d')}
          />,
          document.querySelector(eName)
        )
    }
}
export default renderPO
