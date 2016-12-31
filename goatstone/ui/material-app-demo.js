import React from 'react'
import Rx from 'rx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import Snackbar from 'material-ui/Snackbar'

import ListMake from 'goatstone/ui/list-make'
import MakeListToolbar from 'goatstone/make-a-list/ui/toolbar'
// make a list
import {About, Settings} from 'goatstone/make-a-list/ui/dialog-content.js'
import MakeListControl from 'goatstone/make-a-list/ui/make-list-control.js'
const log = require('goatstone/log/log.js')
// events
import events from 'events'
const eventEmitter = new events.EventEmitter()
const dialogStream = Rx.Observable.fromEvent(eventEmitter, 'dialog')
const messageStream = Rx.Observable.fromEvent(eventEmitter, 'message')
const listStream = Rx.Observable.fromEvent(eventEmitter, 'list')
const logStream = Rx.Observable.merge(messageStream, dialogStream, listStream)
logStream.subscribe(x => {
    log('logs', x)
}, err => log('e', err), () => log('c'))

class App extends React.Component {
    constructor (props) {
        super(props)
        this.arr = []
        this.count = 0
        this.state = {
            mainList: [],
            isOpenSnackBar: true,
            isOpenDialog: false,
            msg: 'Welcome To Make A List!',
            dialogContent: <About />
        }
    }
    componentDidMount () {
        // listStream
        listStream
        .filter(x => x.action === 'add')
        .map(x => x.item)
        .subscribe(item => {
            item.id = this.count++
            this.arr.push(item)
            this.setState({
                mainList: this.arr,
                isOpenDialog: false,
                isOpenSnackBar: true,
                msg: 'Item added'
            })
        }, err => log('e', err), () => log('c'))
        listStream
        .filter(x => x.action === 'delete')
        .map(x => x.id)
        .subscribe(id => {
            const i = this.arr.findIndex(x => x.id === id)
            this.arr.splice(i, 1)
            this.setState({
                mainList: this.arr,
                isOpenSnackBar: true,
                msg: 'Item removed'
            })
        }, err => log('e', err), () => log('c'))
        // generate some list items
        ;[11, 22, 1, 2, 3].forEach(x => {
            eventEmitter.emit('list', {
                action: 'add',
                item: {title: x, description: 'd', importance: 0}
            })
        })
        // dialogStream
        dialogStream.filter(x => x.content === 'settings')
        .subscribe(x => {
            this.setState({
                dialogContent: <Settings />,
                isOpenDialog: true
            })
        }, err => log('e', err), () => log('c'))
        dialogStream.filter(x => x.content === 'list')
        .subscribe(x => {
            this.setState({
                dialogContent: <MakeListControl eventEmitter={eventEmitter} />,
                isOpenDialog: true
            })
        }, err => log('e', err), () => log('c'))
        dialogStream.filter(x => x.content === 'about')
        .subscribe(x => {
            this.setState({
                dialogContent: <About />,
                isOpenDialog: true
            })
        }, err => log('e', err), () => log('c'))
    }
    render () {
        const actions = [
            <FlatButton
             label="Close"
             primary={true}
             onTouchTap={x => {
                 this.setState({isOpenDialog: false})
             }}
            />
        ]
        return (
          <MuiThemeProvider>
          <div>
            <MakeListToolbar
              eventEmitter={eventEmitter} />
            <ListMake
              arr={this.state.mainList}
              eventEmitter={eventEmitter} />
            <Dialog
              actions={actions}
              modal={false}
              open={this.state.isOpenDialog}
              onRequestClose={x => {
                  this.setState({isOpenDialog: false})
              }}
            >
              {this.state.dialogContent}
            </Dialog>
            <Snackbar
              open={this.state.isOpenSnackBar}
              message={this.state.msg}
              autoHideDuration={3000}
              onRequestClose={x => {
                  this.setState({isOpenSnackBar: false})
              }}
            />
          </div>
          </MuiThemeProvider>
        )
    }
}
export default App
