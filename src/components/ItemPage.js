import React, { Component } from 'react';
import itemData from '../product-input.json'
import Item from './Item'

class ItemPage extends Component {
  state = {
    items: itemData
  }

  render() {
    const { items } = this.state
    console.log(items)

    return (
      <ul>
        {
          items.groups.map( (item) => (
            <Item key={item.id} />
          ))
        }
      </ul>
    )
  }
}


export default ItemPage