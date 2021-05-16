import React from 'react'
import CarouselScreen from './CarouselScreen'
import "bootstrap/dist/css/bootstrap.min.css";
import  MediaScreen from "./MediaScreen"
import CalendarHome from "./CalendarHome";
import "../static/css/homescreen.css";

export default function HomeScreen() {
    return (
        <div className = "homeStyle" >
            {/* <div>
                <CarouselScreen/>
            </div> */}
            <br/>
            <br/>
            <div className = "mainHome">
                {/* <MediaScreen /> */}
                <br></br>
                {/* <CalendarHome /> */}
            </div>
            <br/>
            <br/>
            <div className = "textBox">
                <h1 className = "textStyle">We are Conant Hack Club</h1>
                <br></br>
                <img src="/conantlogo.png" alt="ConantLogo"></img>
                <br></br>

                <h2 style={{color: "#0065ea"}}>What we do:</h2>
                <h5 style={{color: "#0065ea"}}>Conant Hack Club is a group full of enthusiastic students willing to explore
                Computer Science beyond the scope of the classroom. Our goal is to push the limits of our mind and
                share our knowledge with others. </h5>
                <h5 style={{color: "#0065ea"}}>We explore topics in AI, Unity, Neural Networks, Cloud Computing, and more!</h5>
                <h5 style={{color: "#0065ea"}}>Join us in exploring the wonderful subject known as Computer Science </h5>
            </div>

            <div class='light x1'></div>
            <div class='light x2'></div>
            <div class='light x3'></div>
            <div class='light x4'></div>
            <div class='light x5'></div>
            <div class='light x6'></div>
            <div class='light x7'></div>
        <div class='light x8'></div>
  <div class='light x9'></div>
        </div>

    )
}
