import React from 'react'
import ActionHome from 'material-ui/svg-icons/action/home'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'

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
let a = 1
function hc (x) {
    console.log('x', x)
    a = 2
}
const MakeListControl = props => (
  <div style={{backgroundColor: '#ccc'}}>
    <h3>Make A List Item</h3>
    <p>Create items for a list.</p>
    <SelectField
      floatingLabelText="ImportanceX"
      value={a}
      onChange={x=>hc(x)}
      disabled={false}>
      <MenuItem value={1} primaryText="Important" />
      <MenuItem value={2} primaryText="Not So Important" />
    </SelectField>
    <TextField
       hintText="Name"
       onChange={x => {
           console.log('change')
       }}
     />
     <TextField
        hintText="Description"
        onChange={x => {
            console.log('change desc')
        }}
      /><br />
    <button onClick={x => {
        console.log('xxx', this)
        props.eventEmitter.emit('list', {a: 'yehhhh!'})
    }}>
  Make It</button>
  </div>
)
export {A, B, MakeListControl}
