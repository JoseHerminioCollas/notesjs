const React = require('react')

const Control = props => (
      <div>
          Control {props.a}
         <button onClick={props.func}>Start</button>
         <button onClick={props.func}>Stop</button>
      </div>
)
Control.propTypes = {
    a: React.PropTypes.string.isRequired
}

module.exports = Control
