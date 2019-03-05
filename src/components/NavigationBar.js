import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function NavigationBar() {
  return (
    <Navbar 
      bg="dark" 
      variant="dark">
      <Navbar.Brand>Product Listing</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Categories</Nav.Link>
          <Nav.Link>Items</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
