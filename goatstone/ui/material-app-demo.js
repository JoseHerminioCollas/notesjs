import React from 'react'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import ActionHome from 'material-ui/svg-icons/action/home'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {MenuItem} from 'material-ui/Menu'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import Divider from 'material-ui/Divider'

const App = (props) => (
  <div>
  <Toolbar>
    <ToolbarGroup firstChild={true}>
      <ToolbarTitle text="Make A List" style={{marginLeft: '20px'}} />
    </ToolbarGroup>
    <ToolbarGroup>
        <FloatingActionButton style={{marginRight: '20px'}} mini={true}
            onTouchTap={
                e => {
                    e.preventDefault() // This prevents ghost click.
                    console.log('action!!!')
                    props.eventEmitter.emit('popover',
                    {show: true, target: 'popover', content: 'about'})
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

        </ToolbarGroup>
    </Toolbar>
    <div id="d" data-target="popover"></div>
    <List>
      <ListItem primaryText="a list item" />
      <ListItem primaryText="abc def" leftIcon={<ActionGrade />} />
      <ListItem primaryText="123" />
      <ListItem primaryText="A" />
      <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
      <ListItem primaryText="B" />
      <ListItem primaryText="C" />
    </List>
  </div>
)
export default App
