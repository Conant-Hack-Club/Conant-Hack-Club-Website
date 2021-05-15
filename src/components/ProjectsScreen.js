import React, {useState, useEffect} from 'react'
import ProjectsCarouselScreen from './ProjectsCarouselScreen'
import ProjectsGridScreen from './ProjectsGridScreen'
import "../static/css/projectsscreen.css";

export default function ProjectsScreen(){
    return (
        <div>
            <ProjectsCarouselScreen year={window.location.href.split("/")[4].split("&")[0]} postId={window.location.href.split("/")[4].split("&")[1]}/>
            <br></br>
            <ProjectsGridScreen></ProjectsGridScreen>
        </div>
    )
}
