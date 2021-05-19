import React, { useEffect, useState }  from 'react'
import "../static/css/projectsscreen.css";
import {db} from "./firebase"

export default function ProjectsGridScreen({year}) {
    const [projects, setProjects] = useState([])
    const [info, setInfo] = useState("")

    useEffect(() => {
    
      db.collection('years').doc(year).collection("projects").onSnapshot((snapshot) => {
        setProjects(snapshot.docs.map((doc) => ({
          data: doc.data()
        })));
      })

      var docRef = db.collection('years').doc(year)

    docRef.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data();
            setInfo(data.info)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    }, [])

    return (
        <div>
            <br></br>
            <h1 style={{color:'white',justifyContent:'center', textAlign: 'center', alignItems:'center'}}>{year} Projects</h1>
            <br></br>
            <p style={{color:'white', textAlign: 'center'}}>{info}</p>
            <br></br>
            <div class="grid">{
                projects.map(({id, data}) => (
                    // <Carousel.Item key={id}>
                    <div class="item">
                        <a href = {data.projectUrl} target="blank">
                            <div style={{justifyContent:'center', textAlign: 'center', alignItems:'center', minHeight:"200px"}}>
                                <img
                                    src={data.pictureSrc}
                                    style={{zIndex: "11", position: "sticky"}}
                                    width="50%"
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
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}