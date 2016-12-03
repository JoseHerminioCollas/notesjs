'strict mode'
const Rx = require('rx')
const async = require('async')
// const React = require('react')
const ReactDOM = require('react-dom')
const Message = require('goatstone/ui/message')
const Control = require('goatstone/ui/control')
const tasks = require('goatstone/remote/task/tasks')
var FuncSubject = require('rx-react').FuncSubject

var message

/* appSubject
 handles application componet gererated events
 */
const appSubject = FuncSubject.create()
const source = appSubject
source.subscribe(createObserver('SourceA'))
source.subscribe(createObserver('SourceB'))
function createObserver (tag) {
    return Rx.Observer.create(
        function (x) {
            message.setState({ x: ` getting  results: ${tag} ${x}  ` })
            async.parallel(tasks.map(e => {
                return e.task
            }), (err, results) => {
                if (err) throw new Error('error')
                message.setState({ x: JSON.stringify(results) })
            })
        },
        function (err) {
            console.log('Error: ' + err)
        },
        function () {
            console.log('Completed')
        })
}

var Weather = require('goatstone/ui/weather')(appSubject)

window.onload = function () {
    ReactDOM.render(<Control />,
        document.getElementById('control'))
    message = ReactDOM.render(<Message />,
        document.getElementById('message'))

    ReactDOM.render(<Weather />,
        document.getElementById('w'))

    var startButton = document.getElementById('start')
    var pauseButton = document.getElementById('stop')
    var wb = document.getElementById('w')
    console.log(startButton, pauseButton, wb)
}
