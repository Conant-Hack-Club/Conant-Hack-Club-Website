import React from 'react'
import { Carousel } from 'react-bootstrap'
import logo from '../static/images/conantSchool.jpg'
import CHCLogo from '../static/images/chc.png'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function CarouselScreen() {
    return (
      <Carousel className="carousel">
        <Carousel.Item className="carousel-item">
          <a href = "https://devpost.com/">
            <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqpm-PDWz8jwlavFrBu-6KRuoZXHca38VOQ&usqp=CAU"
            alt="Hackathon!"
            style = {{opacity:0.5}}
            />
          </a>
          
          <Carousel.Caption>
            <h3>Upcoming Hackathon!</h3>
            <p>Great opportunity to improve your coding skills</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://ashayp.com/images/hackclublogo.png"
            alt="ProjectsPromo"
            height = "auto"
            width = "auto"
            style = {{opacity:0.5}}
          />

          <Carousel.Caption style={{ color: 'blue' }}>
            <h3>Check Out Our Newest Projects</h3>
            <Link to="/projects" style={{ color: 'blue' }}>Click here to check them out!</Link>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item className="carousel-item">
        <a href = "https://d211.zoom.us/j/97478593700?pwd=MThFYnBZMDQ0UXdiK3ZJL3VubCtHZz09#success">
          <div className="imageDiv">
            <img
              className="d-block w-100"
              src={CHCLogo}
              alt="Hack Club"
              height="100%"
              width="auto"
              style = {{opacity:0.5}}
            />
          </div>
          </a>

          <Carousel.Caption style={{ color: 'black' }}>
            <h3>Join Us at Conant Hack Club</h3>
            <p>
              We meet every week at 3:30 PM CST on Wednesdays. Join us as we explore a multitude of coding opportunities and learn together.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default CarouselScreen;
