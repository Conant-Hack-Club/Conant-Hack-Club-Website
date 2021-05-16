import React, { useEffect, useState } from 'react'
import {Carousel, NavDropdown} from "react-bootstrap";
import logo from "../static/images/conantSchool.jpg";
import {db} from "./firebase"
import "../static/css/carouselImg.css";

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
              <div style={{justifyContent:'center', textAlign: 'center', alignItems:'center', backgroundColor:"#0085ea"}}>
              <img
                  src={data.picturesrc}
                  style={{maxWidth:"80%"}}
                  // className="person__pic"
                  style={{zIndex: "10", position: "sticky"}}
                  alt = {data.name}
                  width="auto"
                  height = {800}
              />
              </div>
              </a>
              <Carousel.Caption>
                <h2 style={{zIndex: "12"}}>{data.name}</h2>
                <h3 style={{zIndex: "12"}}>{data.creator}</h3>
                <p style={{zIndex: "12"}}>
                  {data.description}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
        ))
      }
    </Carousel>
  );
}
