import React from 'react'
import ActionHome from 'material-ui/svg-icons/action/home'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

const A = props => (
    <div>
      <ActionHome />
      <h3>Make a List.</h3>
      <p> Create items for a list by select an icon and a note.</p>
    </div>
  )
const B = props => (
  <div>xxx
    <ActionHome />
    <h3>settings</h3>
    <p> Create items for a list by select an icon and a note.</p>
  </div>
)
class MakeListControl extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            importance: 1,
            title: 'title',
            description: 'description'
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (value) {
        this.setState(value)
    }
    render () {
        return (
        <div style={{backgroundColor: '#ccc', padding: '20px'}}>
        <h3>Make a List.</h3>
        <p> Create items for a list by select an icon and a note.</p>
          <SelectField
            floatingLabelText="Importance"
            value={this.state.importance}
            onChange={(e, i, v) => {
                this.handleChange({importance: v})
            }}
          >
            <MenuItem value={1} primaryText="Never" />
            <MenuItem value={2} primaryText="Every Night" />
            <MenuItem value={3} primaryText="Weeknights" />
            <MenuItem value={4} primaryText="Weekends" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
          <br />
          <TextField
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
            name="title"
            value={this.state.title}
            onChange={(e, i, v) => {
                this.handleChange({title: i})
            }}
          /><br />
          <FloatingActionButton style={{marginRight: '20px'}} mini={true}
              onTouchTap={
                  e => {
                      e.preventDefault() // This prevents ghost click.
                      this.props.eventEmitter.emit('list',
                          {
                              action: 'add',
                              item: {
                                  title: this.state.title,
                                  description: this.state.description,
                                  importance: this.state.importance
                              }
                          })
                  }
              }>
              <ContentAdd />
          </FloatingActionButton>
        </div>
        )
    }
}
export {A, B, MakeListControl}
