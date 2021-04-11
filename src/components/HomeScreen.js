import React from 'react'
import CarouselScreen from './CarouselScreen'
import "bootstrap/dist/css/bootstrap.min.css";
import  MediaScreen from "./MediaScreen"
import CalendarHome from "./CalendarHome";
import "../static/css/homescreen.css";

export default function HomeScreen() {
    return (
        <div>
            <div>
                <CarouselScreen/>
            </div>
            <br></br>
            <br></br>
            <div className = "mainHome">
                <MediaScreen />
                <br></br>
                <CalendarHome />
            </div>
        </div>
        
    )
}
