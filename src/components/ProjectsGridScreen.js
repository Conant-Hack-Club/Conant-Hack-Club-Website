import React, { useEffect, useState }  from 'react'
import "../static/css/projectsscreen.css";
import {db} from "./firebase"

export default function ProjectsGridScreen({year, postId}) {
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
        <div>
            <br></br>
            <h1 style={{color:'white',justifyContent:'center', textAlign: 'center', alignItems:'center'}}>Projects for the year 2020-2021</h1>
            <br></br>
            <div class="grid">{
                projects.map(({id, data}) => (
                    // <Carousel.Item key={id}>
                    <div class="item">
                        <a href = {data.projectUrl}>
                            <div style={{justifyContent:'center', textAlign: 'center', alignItems:'center', backgroundColor:"rgb(209, 216, 236)", minHeight:"200px"}}>
                                <img
                                    src={data.picturesrc}
                                    style={{zIndex: "11", position: "sticky"}}
                                    width="100%"
                                    height = "auto"

                                    alt = {data.name}
                                    
                                />
                                <h3>{data.name}</h3>
                                <h5>{data.creator}</h5>
                                <p>{data.description}</p>
                            </div>
                        </a>
                    </div>
                ))}

            </div>
        </div>
    )
}