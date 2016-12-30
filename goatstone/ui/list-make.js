import React from 'react'
import {List, ListItem} from 'material-ui/List'
import {red100, red200, red500} from 'material-ui/styles/colors'
import ClearIcon from 'material-ui/svg-icons/content/clear'

const ListMake = props => {
    const backgroundColors = [red500, red200, red100 ]
    const listItems = props.arr.map((x, i) => {
        const backgroundColor = backgroundColors[x.importance] || red100
        return <ListItem style={{backgroundColor}}
          primaryText={` ${x.title} ${x.importance}`}
          secondaryText={`${x.description}`}
          key={i}
          rightIcon={<ClearIcon
            onClick={e => {
                props.eventEmitter.emit('list', {
                    action: 'delete',
                    id: x.id })
            }} />} />
    })
    return (
        <List>
          {listItems}
        </List>
    )
}
export default ListMake
