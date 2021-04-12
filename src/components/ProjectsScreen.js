import React, {useState, useEffect} from 'react'
import ProjectsCarouselScreen from './ProjectsCarouselScreen'

export default function ProjectsScreen(){

    const [year, setYear] = useState("");

    useEffect(() => {
        var url = window.location.href.split("/")
        console.log(url[url.length - 1]);
        setYear(url[url.length - 1]);
    })

    return (
        <ProjectsCarouselScreen year={year}/>
    )
}
