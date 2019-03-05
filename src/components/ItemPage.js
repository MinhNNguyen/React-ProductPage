import React, { Component } from 'react';
import itemData from '../helpers/product-input.json'
import Item from './Item'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

class ItemPage extends Component {
  state = {
    items: itemData
  }

  componentDidMount() {
    // Set the title for the page
    document.title = "Listing Page"
  }

  render() {
    const { items } = this.state
    return (
      <div id="container">
        <NavigationBar />
        <ul className="col-xs-12 col-sm-11 col-lg-11 item-page">
          {
            items.groups.map( (item) => (
              <Item key={item.id} item={item} />
            ))
          }
        </ul>
        <Footer />
      </div>
    )
  }
}


export default ItemPage