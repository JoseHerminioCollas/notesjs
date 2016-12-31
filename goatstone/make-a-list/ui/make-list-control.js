import React from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

class MakeListControl extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            importance: 0,
            title: '',
            description: '',
            titleErrorMessage: '',
            descriptionErrorMessage: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    validate () {
        const hasContent = this.state.title.length > 0
        return hasContent
    }
    handleChange (value) {
        this.setState(value)
    }
    render () {
        return (
        <div style={{
            backgroundColor: '#eee',
            padding: '12px',
            borderRadius: '3px',
            overflow: 'hidden'}}>
        <h3>Make a List Item</h3>
        <TextField
          hintText="Add a title"
          floatingLabelText="Title"
          name="title"
          errorText={this.state.titleErrorMessage}
          value={this.state.title}
          onChange={(e, i, v) => {
              const maxChars = 60
              if (i.length > maxChars) {
                  this.setState({titleErrorMessage: 'You have reached the maximum number of chararcters.'})
                  return
              }
              this.handleChange({title: i})
          }}
        /><br />
        <TextField
          hintText="Add a description"
          floatingLabelText="Description"
          name="description"
          errorText={this.state.descriptionErrorMessage}
          value={this.state.description}
          multiLine={true}
          rows={2}
          onChange={(e, i, v) => {
              const maxChars = 120
              if (i.length > maxChars) {
                  this.setState({descriptionErrorMessage: 'You have reached the maximum number of chararcters.'})
                  return
              }
              this.handleChange({description: i})
          }}
        /><br />
        <SelectField
          floatingLabelText="Importance Level"
          value={this.state.importance}
          onChange={(e, i, v) => {
              this.handleChange({importance: v})
          }}>
            <MenuItem value={0} primaryText="High" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Low" />
          </SelectField>
          <br />
          <FloatingActionButton
            style={{float: 'right'}}
            mini={true}
              onTouchTap={
                  e => {
                      e.preventDefault() // This prevents ghost click.
                      if (!this.validate()) {
                          this.setState({titleErrorMessage: 'This field is required.'})
                      } else {
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
                  }
              }>
              <ContentAdd />
          </FloatingActionButton>
          <br />
        </div>
        )
    }
}
export default MakeListControl
