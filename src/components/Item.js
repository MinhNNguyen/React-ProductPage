import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Modal, Card } from 'react-bootstrap' 
import PropTypes from 'prop-types'

class Item extends Component {
  state = {
    showModal: false,
  }

  openCarousel = (e) => {
    this.setState(() => ({
      showModal: true
    }))
  }

  closeCarousel = (e) => {
    this.setState( () => ({
      showModal: false
    }))
  }

  render() {
    const { id, name, hero, images, priceRange } = this.props.item 
    const fixedName = name.replace("Fibrosoft&#8482; ","")

    const price = Math.round(Math.random() * (priceRange.selling.high - priceRange.selling.low))
                  + priceRange.selling.low 
    console.log(this.props.item)
    return (
      <Card className=" col-xs-10 col-sm-6 col-lg-4 item-card">
        <Modal 
          show={this.state.showModal}
          onHide={this.closeCarousel}>
          <div className="carousel-container">
            <Carousel>
              {
                images.map((image) => (
                  <Carousel.Item key={image.href}>
                    <img
                      src={image.href}
                      alt={`Image of ${fixedName}`}
                      className="d-block w-100"
                      onClick={this.openCarousel} />
                  </Carousel.Item>
                ))
              }
            </Carousel>
          </div>
        </Modal>
        <Card.Header>
        <div className="hero-image">
            <img src={hero.href}
              alt={`Image of ${fixedName}`}
              className=""
              onClick={this.openCarousel} />
              <h2><span>$ {price}</span></h2>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {fixedName}
          </Card.Title>
          <Card.Text>
            Description for item {id}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

/* Define properties types */

Item.propTypes = {
  key: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired
}

export default Item