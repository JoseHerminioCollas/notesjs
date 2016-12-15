const style = {
    container: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        alignContent: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        fontSize: '16px',
        fontFamily: 'sans-serif',
        height: '90%',
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
    elementHighlight: {},
    elementHighlight2: {}
}
Object.assign(style.elementHighlight, style.element,
  {backgroundColor: 'hsla(200, 100%, 90%, 1.0)'})
Object.assign(style.elementHighlight2, style.element,
  {backgroundColor: 'hsla(50, 100%, 70%, 1.0)'})

module.exports = style
