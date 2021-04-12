import React, { useEffect, useState } from 'react'
import {Carousel, NavDropdown} from "react-bootstrap";
import logo from "../static/images/conantSchool.jpg";
import {db} from "./firebase"

export default function ProjectsCarouselScreen({year, postId}) {

  const [projects, setProjects] = useState([])

  useEffect(() => {

    console.log(year)

    db.collection('years').doc(postId).collection("projects").onSnapshot((snapshot) => {
      setProjects(snapshot.docs.map((doc) => ({
        data: doc.data()
      })));
    })

  }, [])

  function getProjectsFromYear(year){
    /*TODO: logic for getting and setting the carousel items
    probably should use same map function as for navbar*/

  }

  return (
    <Carousel className="carousel">
      {
        projects.map(({id, data}) => (
            <Carousel.Item key={id}>
              <a href = {data.pictureUrl}>
              <img
                  src={data.picturesrc}

                  alt = {data.name}
                  width={2000}
                  height = {1000}
              /></a>
              <Carousel.Caption>
                <h2>{data.name}</h2>
                <h3>{data.creator}</h3>
                <p>
                  {data.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
        ))
      }
      {/*<Carousel.Item className="carousel-item">*/}
      {/*  <img*/}
      {/*    className="d-block w-100"*/}
      {/*    src="https://www.usglc.org/media/2016/09/800x400.png"*/}
      {/*    alt="First Project"*/}
      {/*  />*/}
      {/*  <Carousel.Caption>*/}
      {/*    <h2>First Project sdfslkdfjsldkfj</h2>*/}
      {/*    <h3>CONTRIBUTORS: SOHAM, SAKSHAM</h3>*/}
      {/*    <p>*/}
      {/*      This is a nice description of the project. This is a nice*/}
      {/*      description of the project.*/}
      {/*    </p>*/}
      {/*  </Carousel.Caption>*/}
      {/*</Carousel.Item>*/}
      {/*<Carousel.Item className="carousel-item">*/}
      {/*  <img*/}
      {/*    className="d-block w-100"*/}
      {/*    src="https://www.usglc.org/media/2016/09/800x400.png"*/}
      {/*    alt="Second Project"*/}
      {/*  />*/}

      {/*  <Carousel.Caption>*/}
      {/*      <h2>Second Project asdkfjsadfkljsadflkj</h2>*/}
      {/*      <h3>CONTRIBUTORS: SOHAM, SAKSHAM</h3>*/}
      {/*      <p>*/}
      {/*        This is a nice description of the project. This is a nice*/}
      {/*        description of the project.*/}
      {/*      </p>*/}
      {/*  </Carousel.Caption>*/}
      {/*</Carousel.Item>*/}
      {/*<Carousel.Item className="carousel-item">*/}
      {/*  <div className="imageDiv">*/}
      {/*    <img*/}
      {/*      className="d-block w-100"*/}
      {/*      src="https://www.usglc.org/media/2016/09/800x400.png"*/}
      {/*      alt="Third Project"*/}
      {/*      height="100%"*/}
      {/*      width="auto"*/}
      {/*    />*/}
      {/*  </div>*/}

      {/*  <Carousel.Caption>*/}
      {/*    <h2>Third Project</h2>*/}
      {/*    <h3>CONTRIBUTORS: SOHAM, SAKSHAM</h3>*/}
      {/*    <p>*/}
      {/*      This is a nice description of the project. This is a nice*/}
      {/*      description of the project.*/}
      {/*    </p>*/}
      {/*  </Carousel.Caption>*/}
      {/*</Carousel.Item>*/}
    </Carousel>
  );
}
