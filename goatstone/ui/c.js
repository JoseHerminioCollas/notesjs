const React = require('react')

class C extends React.Component {
    render () {
        return (
            <div>
            C :
            {this.props.a}
            </div>
        )
    }
}
module.exports = C
