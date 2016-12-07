import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {MenuItem} from 'material-ui/Menu'
import RaisedButton from 'material-ui/RaisedButton'

const App = (props) => (
  <div>
    <h1>Make a List</h1>
    <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}>
        <MenuItem primaryText="Refresh"
          onTouchTap={
            x => {
                props.eventEmitter.emit('message',
                {action: 'show', target: 'message', message: 'ZZZZZZZZ'})
            }
        }
        />
        <MenuItem primaryText="Send feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
    <RaisedButton
      onTouchTap={
        e => {
            e.preventDefault() // This prevents ghost click.
            props.eventEmitter.emit('popover',
            {show: true, target: 'popover'})
        }
    }
      label="Click me"
    />
  </div>
)
export default App