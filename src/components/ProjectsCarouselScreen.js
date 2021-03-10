import React from 'react'
import { Carousel } from "react-bootstrap";
import logo from "../static/images/conantSchool.jpg";

export default function ProjectsCarouselScreen() {
    return (
      <Carousel className="carousel">
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://www.usglc.org/media/2016/09/800x400.png"
            alt="First Project"
          />
          <Carousel.Caption>
            <h2>First Project</h2>
            <h3>CONTRIBUTORS: SOHAM, SAKSHAM</h3>
            <p>
              This is a nice description of the project. This is a nice
              description of the project.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://www.usglc.org/media/2016/09/800x400.png"
            alt="Second Project"
          />

          <Carousel.Caption>
              <h2>Second Project</h2>
              <h3>CONTRIBUTORS: SOHAM, SAKSHAM</h3>
              <p>
                This is a nice description of the project. This is a nice
                description of the project.
              </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <div className="imageDiv">
            <img
              className="d-block w-100"
              src="https://www.usglc.org/media/2016/09/800x400.png"
              alt="Third Project"
              height="100%"
              width="auto"
            />
          </div>

          <Carousel.Caption>
            <h2>Third Project</h2>
            <h3>CONTRIBUTORS: SOHAM, SAKSHAM</h3>
            <p>
              This is a nice description of the project. This is a nice
              description of the project.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
