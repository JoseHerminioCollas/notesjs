const React = require('react')
const ReactDOM = require('react-dom')
const Clock = require('./clock.jsx')
// var A = require('/home/goat/projects/notesjs/goatstone/ui/a.jsx')
 import {A} from '../ui/a.js'
const AA = props => (
  <div>
   qqq
  </div>
)

function formatName (user) {
    return user.firstName + ' ' + user.lastName
}
const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}
const element = (
    <h1 style={{color: 'red'}}>
      ---xxx, {formatName(user)}!
    </h1>
)

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)
ReactDOM.render(
    <A className="aa" />,
    document.getElementById('a')
)
ReactDOM.render(
    element,
    document.getElementById('b')
)
