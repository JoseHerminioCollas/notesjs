const React = require('react')
const style = {
    container: {
        fontSize: '24px',
        position: 'fixed',
        right: 0,
        bottom: 0,
        padding: '12px 24px',
        borderRadius: '3px',
        backgroundColor: 'hsla(200, 70%, 70%, 1.0)'
    }
}
const Control = props => (
      <div style={style.container}>
          Control {props.a}
         <button onClick={props.controls.start}>Start</button>
         <button onClick={props.controls.stop}>Stop</button>
      </div>
)
Control.propTypes = {
    a: React.PropTypes.string.isRequired
}

module.exports = Control
