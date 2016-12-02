const React = require('react')

const ArraySort = props => {
    const moves = props.array.map((e, i) => {
        var elementStyle = props.style.element
        if (props.i === i) {
            elementStyle = props.style.elementHighlight
        } else if (props.minI === i) {
            elementStyle = props.style.elementHighlight2
        }
        return (
        <div style={elementStyle} key={i}>
          {e}
        </div>
        )
    })
    return (
      <div style={props.style.container}>
          {moves}
      </div>
    )
}
ArraySort.propTypes = {
    array: React.PropTypes.array.isRequired,
    style: React.PropTypes.object.isRequired,
    i: React.PropTypes.number.isRequired,
    minI: React.PropTypes.number.isRequired
}

module.exports = ArraySort
