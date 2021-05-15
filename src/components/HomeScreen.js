import React from 'react'
import CarouselScreen from './CarouselScreen'
import "bootstrap/dist/css/bootstrap.min.css";
import  MediaScreen from "./MediaScreen"
import CalendarHome from "./CalendarHome";
import "../static/css/homescreen.css";

export default function HomeScreen() {
    return (
        <div className = "homeStyle">
            <div>
                <CarouselScreen/>
            </div>
            <br/>
            <br/>
            <div className = "mainHome">
                {/* <MediaScreen /> */}
                <br></br>
                {/* <CalendarHome /> */}
            </div>
            <br/>
            <br/>
            <div style={{justifyContent:'center', textAlign: 'center', alignItems:'center'}}>
                <h1 className = "textStyle">We are Conant Hack Club</h1>
                <br></br>
                <br></br>

                <h2>What we do:</h2>
                <p>Conant Hack Club is a group full of enthusiastic students willing to explore 
                Computer Science beyond the scope of the classroom. Our goal is to push the limits of our mind and 
                share our knowledge with others. </p>
                <p>We explore topics in AI, Unity, Neural Networks, Cloud Computing, and more!</p>
                <p>Join us in exploring the wonderful subject known as Computer Science </p>
            </div>
            
        </div>
        
    )
}
