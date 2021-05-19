import React, {useState, useEffect} from 'react'
import ProjectsCarouselScreen from './ProjectsCarouselScreen'
import ProjectsGridScreen from './ProjectsGridScreen'
import "../static/css/projectsscreen.css";
import "../static/css/background.css";

export default function ProjectsScreen(){
    return (
        <div className="projectsBody">
            <div className="zUp">
            <br></br>
            <br></br>

            <ProjectsGridScreen year={window.location.href.split("/")[4]} />
            </div>
            {/* <div className='light x1'></div>
            <div className='light x2'></div>
            <div className='light x3'></div>
            <div className='light x4'></div>
            <div className='light x5'></div>
            <div className='light x6'></div>
            <div className='light x7'></div>
            <div className='light x8'></div>
            <div className='light x9'></div> */}
        </div>
    )
}
