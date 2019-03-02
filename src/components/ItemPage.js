import React, { Component } from 'react';
import itemData from '../product-input.json'
import Item from './Item'
import { Navbar, Nav } from 'react-bootstrap'

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
        <Navbar 
          bg="dark" 
          variant="dark">
          <Navbar.Brand>Product Listing</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>Categories</Nav.Link>
              <Nav.Link>Items</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Profile</Nav.Link>
              <Nav.Link>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <ul className="item-page">
          {
            items.groups.map( (item) => (
              <Item key={item.id} item={item} />
            ))
          }
        </ul>
        <Navbar 
          bg="dark" 
          variant="dark" 
          fixed="bottom"
          className="footer">
          <Navbar.Brand>
            Produced By Robert Nguyen@2019
          </Navbar.Brand>
        </Navbar>
      </div>
    )
  }
}


export default ItemPage