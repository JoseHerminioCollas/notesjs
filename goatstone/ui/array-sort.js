const React = require('react')
const style = {
    container: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: '16px',
        fontFamily: 'sans-serif',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'flex-start',
        height: '100%',
        width: '100%',
        backgroundColor: 'hsla(200, 50%, 50%, 1.0)'
    },
    element: {
        flex: '1 0',
        backgroundColor: 'hsla(50, 10%, 80%, 1.0)',
        padding: '6px',
        margin: '1px',
        minWidth: '50px'
    },
    e: {
        flex: '1 0',
        backgroundColor: 'red',
        padding: '6px',
        margin: '1px',
        minWidth: '50px'
    },
    e2: {
        flex: '1 0',
        backgroundColor: 'hsla(50, 100%, 70%, 1.0)',
        padding: '6px',
        margin: '1px',
        minWidth: '50px'
    }
}
const ArraySort = props => {
    const moves = props.a.map((e, i) => {
        var eS = style.element
        if (props.i === i) {
            eS = style.e
        } else if (props.minI === i) {
            eS = style.e2
        }
        return (
        <div style={eS} key={i}>
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
// D.propTypes = {
//     a: React.PropTypes.string.isRequired
// }

module.exports = ArraySort
