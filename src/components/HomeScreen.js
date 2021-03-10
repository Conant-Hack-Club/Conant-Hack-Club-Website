import React from 'react'
import CarouselScreen from './CarouselScreen'
import "bootstrap/dist/css/bootstrap.min.css";
import  MediaScreen from "./MediaScreen"
export default function HomeScreen() {
    return (
        <div>
            <CarouselScreen/>
            <MediaScreen />
        </div>
    )
}
