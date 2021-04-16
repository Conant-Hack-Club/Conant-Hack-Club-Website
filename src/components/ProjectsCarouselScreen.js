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

  return (
    <Carousel className="carousel">
      {
        projects.map(({id, data}) => (
            <Carousel.Item key={id}>
              <a href = {data.projectUrl}>
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
    </Carousel>
  );
}
