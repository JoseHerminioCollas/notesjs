const React = require('react')

const Control = props => (
      <div style={props.style.container}>
          Control :
         <button onClick={props.start}>Start</button>
         <button onClick={props.stop}>Stop</button>
      </div>
)
Control.propTypes = {
    style: React.PropTypes.object.isRequired,
    start: React.PropTypes.func.isRequired,
    stop: React.PropTypes.func.isRequired
}

module.exports = Control
