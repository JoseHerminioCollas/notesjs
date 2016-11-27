const React = require('react')

var Clock = React.createClass({
    getInitialState: function () {
        return {
            count: 500
        }
    },
    componentWillMount: function () {
        this.setState({items: this.state.initialItems})
    },
    incrementCount: function () {
        this.setState({
            count: this.state.count + 1
        })
    },
    render: function () {
        return (
          <div>
          XXX{this.state.count}aaa
          </div>
        )
    }
})
module.exports = Clock
