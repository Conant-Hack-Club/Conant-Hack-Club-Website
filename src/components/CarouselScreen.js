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
            <div style={{justifyContent:'center', textAlign: 'center', alignItems:'center', backgroundColor:"rgb(209, 216, 236)"}}>
              <img
              //className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqpm-PDWz8jwlavFrBu-6KRuoZXHca38VOQ&usqp=CAU"
              alt="Hackathon!"
              height = "700px"
              //width = "auto"
              //objectFit = "contain"
              style = {{opacity:0.5}}
              />
            </div>
          </a>

          
          <Carousel.Caption>
            <h3>Upcoming Hackathon!</h3>
            <p>Great opportunity to improve your coding skills</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item className="carousel-item">
        <div style={{justifyContent:'center', textAlign: 'center', alignItems:'center', backgroundColor:"rgb(209, 216, 236)"}}>
          <img
            src="https://ashayp.com/images/hackclublogo.png"
            alt="ProjectsPromo"
            height = "700px"
            color = "gray"
            width = "auto"
            objectFit = "none"
            style = {{opacity:0.4}}
          />
        </div>
          <Carousel.Caption style={{ color: 'white' }}>
            <h3>Check Out Our Newest Projects</h3>
            <Link to="/projects" style={{ color: 'white' }}>Click here to check them out!</Link>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item className="carousel-item">
        {/* <a href = "https://d211.zoom.us/j/97478593700?pwd=MThFYnBZMDQ0UXdiK3ZJL3VubCtHZz09#success"> */}
          <div className="imageDiv">
            <div style={{justifyContent:'center', textAlign: 'center', alignItems:'center', backgroundColor:"rgb(209, 216, 236)"}}>
              <img
                //className="d-block w-100"
                src={CHCLogo}
                alt="Hack Club"
                height="700px"
                width="auto"
                style = {{opacity:1.5}}
              />
            </div>
          </div>
          {/* </a> */}

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
