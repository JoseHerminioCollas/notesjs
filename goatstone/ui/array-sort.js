const React = require('react')
const style = {
    fontSize: '12px',
    backgroundColor: '#ccc',
    padding: 12,
    width: 16,
    height: 16,
    float: 'left',
    border: '1px solid #999'
}
const ArraySort = props => {
    const moves = props.a.map((e, i) => {
        return (
        <div style={style} key={i}>
          {e}
        </div>
        )
    })
    return (
      <div>
          {moves}
      </div>
    )
}
// D.propTypes = {
//     a: React.PropTypes.string.isRequired
// }

module.exports = ArraySort
