const React = require('react')

const D = props => (
      <div>
          D !!!!!!! !!!!!!!!! {props.a}
         <button onClick={props.func}>b</button>
      </div>
)
D.propTypes = {
    a: React.PropTypes.string.isRequired
}

module.exports = D
