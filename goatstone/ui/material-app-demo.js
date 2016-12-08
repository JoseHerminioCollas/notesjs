import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import ActionHome from 'material-ui/svg-icons/action/home'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {MenuItem} from 'material-ui/Menu'
import AppBar from 'material-ui/AppBar'

const App = (props) => (
  <div>
    <AppBar
      title="Make A List"
      iconElementLeft={
        <ActionHome style={{marginTop: '12px', color: '#ccc'}} />
      }
      iconElementRight={
        <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}>
              <MenuItem primaryText="About"
                  onTouchTap={
                      e => {
                          e.preventDefault() // This prevents ghost click.
                          props.eventEmitter.emit('popover',
                          {show: true, target: 'popover', content: 'about'})
                      }
                  }
              />
              <MenuItem primaryText="Settings"
                onTouchTap={
                    e => {
                        e.preventDefault() // This prevents ghost click.
                        props.eventEmitter.emit('popover',
                        {show: true, target: 'popover', content: 'settings'})
                    }
                }
              />
          </IconMenu>
        }
    />
  </div>
)
export default App
