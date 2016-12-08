import React from 'react'
import ReactDOM from 'react-dom'
import Popover from 'material-ui/Popover/Popover'
import {Menu, MenuItem} from 'material-ui/Menu'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
const log = require('goatstone/log/log.js')
import ActionHome from 'material-ui/svg-icons/action/home'
const A = props => (
  <div>
    <ActionHome />
    <h3>Make a List.</h3>
    <p> Create items for a list by select an icon and a note.</p>
  </div>
)
const B = props => (
  <div>
    <h3>Settings</h3>
    <p>Set options for Make A List.</p>
    <ul>
      <li>A</li>
      <li>B</li>
    </ul>
  </div>
)
const PO = props => (
    <MuiThemeProvider>
        <Popover
            open={props.isVisible}
            anchorEl={props.targetElement}
            anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
            targetOrigin={{horizontal: 'middle', vertical: 'top'}}
            children={<ActionHome />}
            onRequestClose={x => {
                props.close()
            }}>
            {props.content}
            <Menu>
                <MenuItem
                    onTouchTap={x => {
                        props.close()
                    }}
                    primaryText="Close" />
            </Menu>
        </Popover>
    </MuiThemeProvider>
)
function renderPO (elementName, stream, eventEmitter) {
    let content = <A />
    stream.subscribe(
        x => {
            if (x.content === 'settings') {
                content = <B />
            } else {
                content = <A />
            }
            a(x.show)
        },
        err => log('e', err),
        () => log('c'))

    function a (isV) {
        ReactDOM.render(
          <PO
          close={x => {
              a(false)
          }}
          isVisible={isV}
          targetElement={document.querySelector('#d')}
          eventEmitter={eventEmitter}
          children={<ActionHome />}
          content={content}
          />,
          document.querySelector(elementName)
        )
    }
}
export default renderPO
