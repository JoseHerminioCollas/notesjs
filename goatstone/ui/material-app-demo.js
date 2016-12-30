import React from 'react'
import Rx from 'rx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import Popover from 'material-ui/Popover/Popover'
import Snackbar from 'material-ui/Snackbar'
import ListMake from 'goatstone/ui/list-make'
import MakeListToolbar from 'goatstone/make-a-list/ui/toolbar'
// make a list
import {A, B, MakeListControl} from 'goatstone/make-a-list/ui/popover-content.js'
const log = require('goatstone/log/log.js')
// events
import events from 'events'
const eventEmitter = new events.EventEmitter()
const popoverStream = Rx.Observable.fromEvent(eventEmitter, 'popover')
const messageStream = Rx.Observable.fromEvent(eventEmitter, 'message')
const listStream = Rx.Observable.fromEvent(eventEmitter, 'list')
const logStream = Rx.Observable.merge(messageStream, popoverStream, listStream)
logStream.subscribe(x => {
    log('logs', x)
}, err => log('e', err), () => log('c'))

class App extends React.Component {
    constructor (props) {
        super(props)
        this.arr = []
        this.count = 0
        this.state = {
            date: new Date(),
            isOpenSnackBar: true,
            isOpenPopover: true,
            msg: 'abc',
            content: <A />,
            mainList: []
        }
    }
    componentDidMount () {
        listStream
        .filter(x => x.action === 'add')
        .map(x => x.item)
        .subscribe(item => {
            item.id = this.count++
            this.arr.push(item)
            this.setState({mainList: this.arr})
            this.setState({isOpenPopover: false})
        }, err => log('e', err), () => log('c'))
        listStream
        .filter(x => x.action === 'delete')
        .map(x => x.id)
        .subscribe(id => {
            const i = this.arr.findIndex(x => x.id === id)
            this.arr.splice(i, 1)
            this.setState({mainList: this.arr})
        }, err => log('e', err), () => log('c'))
        ;[11, 22, 1, 2, 3].forEach(x => {
            eventEmitter.emit('list', {
                action: 'add',
                item: {title: x, description: 'd', importance: 0}
            })
        })
        // TODO filter this
        popoverStream.subscribe(x => {
            if (x.content === 'settings') {
                this.setState({content: <B />})
            } else if (x.content === 'list') {
                this.setState({content: <MakeListControl
                  eventEmitter={eventEmitter} />})
            } else {
                this.setState({content: <A />})
            }
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
            <MakeListToolbar
              eventEmitter={eventEmitter} />
            <ListMake arr={this.state.mainList} eventEmitter={eventEmitter} />
            <Popover
              open={this.state.isOpenPopover}
              anchorEl={document.querySelector('#d')}
              anchorOrigin={{horizontal: 'middle', vertical: 'top'}}
              targetOrigin={{horizontal: 'middle', vertical: 'top'}}
              children={this.state.content}
              onRequestClose={x => {
                  this.setState({isOpenPopover: false})
              }}>
            </Popover>
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
