import React, {useState, useEffect} from 'react'
import ProjectsCarouselScreen from './ProjectsCarouselScreen'

export default function ProjectsScreen(){
    return (
        <ProjectsCarouselScreen year={window.location.href.split("/")[4].split("&")[0]} postId={window.location.href.split("/")[4].split("&")[1]}/>
    )
}
