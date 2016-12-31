import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {MenuItem} from 'material-ui/Menu'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import Divider from 'material-ui/Divider'

const MakeListToolbar = props => {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <ToolbarTitle text="Make A List" style={{marginLeft: '20px'}} />
        </ToolbarGroup>
        <ToolbarGroup>
            <FloatingActionButton style={{marginRight: '20px'}} mini={true}
                onTouchTap={
                    e => {
                        e.preventDefault() // This prevents ghost click.
                        props.eventEmitter.emit('dialog',
                        {content: 'list'})
                    }
                }
            >
              <ContentAdd />
            </FloatingActionButton>
            <Divider />
             <IconMenu
                  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                  anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}>
                  <MenuItem primaryText="About"
                      onTouchTap={
                          e => {
                              e.preventDefault() // This prevents ghost click.
                              props.eventEmitter.emit('dialog',
                              {content: 'about'})
                          }
                      }
                  />
              </IconMenu>
            </ToolbarGroup>
        </Toolbar>
    )
}
export default MakeListToolbar
