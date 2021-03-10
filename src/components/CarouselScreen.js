import React from 'react'
import { Carousel } from 'react-bootstrap'
import logo from '../static/images/conantSchool.jpg'

function CarouselScreen() {
    return (
      <Carousel className="carousel">
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={logo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={logo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="imageDiv">
            <img
              className="d-block w-100"
              src={logo}
              alt="Third slide"
              height="100%"
              width="auto"
            />
          </div>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselScreen;
