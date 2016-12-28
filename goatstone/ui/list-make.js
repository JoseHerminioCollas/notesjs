import React from 'react'
import {List, ListItem} from 'material-ui/List'

const ListMake = props => {
    const l = props.arr.map((x, i) => {
        return <ListItem primaryText={x.a} key={i}/>
    })
    return (
        <List>
            {l}
        </List>
    )
}
export default ListMake
