import React from 'react'
import Rx from 'rx'
// import ReactDOM from 'react-dom'
const log = require('goatstone/log/log.js')
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import Popover from 'material-ui/Popover/Popover'
import ActionHome from 'material-ui/svg-icons/action/home'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {MenuItem} from 'material-ui/Menu'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import Divider from 'material-ui/Divider'
import Snackbar from 'material-ui/Snackbar'

import events from 'events'
const eventEmitter = new events.EventEmitter()
const popoverStream = Rx.Observable.fromEvent(eventEmitter, 'popover')
const messageStream = Rx.Observable.fromEvent(eventEmitter, 'message')
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

const C = props => (
  <div>
    <ActionHome />
    <h3>Make a List.</h3>
    <p> Create items for a list by select an icon and a note.</p>
  </div>
)

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            a: '1111 xx',
            date: new Date(),
            isOpenSnackBar: true,
            isOpenPopover: true,
            msg: 'abc'
        }
    }
    componentDidMount () {
        popoverStream.subscribe(x => {
            this.setState({
                isOpenSnackBar: true,
                msg: 'hello',
                isOpenPopover: true
            })
        }, err => log('e', err), () => log('c'))
    }
    render () {
        return (
          <MuiThemeProvider>
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
                            eventEmitter.emit('popover',
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
                                  eventEmitter.emit('popover',
                                  {show: true, target: 'popover', content: 'about'})
                              }
                          }
                      />
                      <MenuItem primaryText="Settings"
                        onTouchTap={
                            e => {
                                e.preventDefault() // This prevents ghost click.
                                eventEmitter.emit('popover',
                                {show: true, target: 'popover', content: 'settings'})
                            }
                        }
                      />
                  </IconMenu>
                </ToolbarGroup>
            </Toolbar>
            <List>
              <ListItem primaryText="a list item" />
              <ListItem primaryText="abc def" leftIcon={<ActionGrade />} />
              <ListItem primaryText="123" />
              <ListItem primaryText="A" />
              <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
              <ListItem primaryText="B" />
              <ListItem primaryText="C" />
            </List>
            <Popover
                open={this.state.isOpenPopover}
                anchorEl={document.querySelector('#d')}
                anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
                targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                children={<ActionHome />}
                content={<C />}
                onRequestClose={x => {
                  console.log('close')
                    this.setState({isOpenPopover: false})
                }}>
            </Popover>
            <Snackbar
              open={this.state.isOpenSnackBar}
              message={this.state.msg}
              autoHideDuration={3000}
              onRequestClose={x => {
                  this.setState({
                      isOpenSnackBar: false
                  })
              }}
            />
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            <h2>It is {this.state.a}.</h2>
          </div>
          </MuiThemeProvider>
        )
    }
}
export default App
