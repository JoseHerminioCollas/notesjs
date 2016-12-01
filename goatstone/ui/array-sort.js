const React = require('react')
const style = require('goatstone/ui/style/container-element.js')

const ArraySort = props => {
    const moves = props.a.map((e, i) => {
        var elementStyle = style.element
        if (props.i === i) {
            elementStyle = style.elementHighlight
        } else if (props.minI === i) {
            elementStyle = style.elementHighlight2
        }
        return (
        <div style={elementStyle} key={i}>
          {e}
        </div>
        )
    })
    return (
      <div style={style.container}>
          {moves}
      </div>
    )
}
ArraySort.propTypes = {
    a: React.PropTypes.array.isRequired,
    i: React.PropTypes.number.isRequired,
    minI: React.PropTypes.number.isRequired
}

module.exports = ArraySort
