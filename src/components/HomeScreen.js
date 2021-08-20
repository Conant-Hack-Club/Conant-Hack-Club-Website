import React from 'react'
import CarouselScreen from './CarouselScreen'
import "bootstrap/dist/css/bootstrap.min.css";
import  MediaScreen from "./MediaScreen"
import CalendarHome from "./CalendarHome";
import "../static/css/homescreen.css";
import "../static/css/background.css";
import Button from 'react-bootstrap/Button';

export default function HomeScreen() {
    return (
        <div className = "homeStyle" >
            <br/>
            <br/>
            <br/>
            <br/>
            <div className = "textBox">
                <br></br>
                <h1 className = "textStyle">Conant HS Hack Club</h1>
                <br></br>
                <img src="/conantlogo.png" className = "homeImg" alt="ConantLogo"></img>
                <br></br>

                <h5 style={{margin:"16px"}}>Coding, creativity, collaboration, and fun</h5>
                <Button variant="primary" style = {{backgroundColor: "#338eda", borderColor: "#338eda"}}>Artificial Intelligence</Button>{' '}
                <Button variant="secondary" style = {{backgroundColor: "#ec3750", borderColor: "#ec3750"}}>Unity</Button>{' '}
                <Button variant="success" style = {{backgroundColor: "#ff8c37", borderColor: "#ff8c37"}}>Web Scraping</Button>{' '}
                <Button variant="warning" style = {{backgroundColor: "#f1c40f", borderColor: "#f1c40f"}}>Python Simulations</Button>{' '}
                <Button variant="danger" style = {{backgroundColor: "#33d6a6", borderColor: "#33d6a6"}}>React.js</Button> {' '}
                <Button variant="info" style = {{backgroundColor: "#a633d6", borderColor: "#a633d6"}}>APIs</Button>{' '}<p>and much, much more...</p>
               
                {/* <h5 className = "crossed" style={{margin:"16px"}}>Join us every Wednesday from 3:30 - 4:30 PM in the Media Center!</h5> */}
                <h5 style={{margin:"16px"}}>Join us on September 1st from 3:30 - 4:30 PM in the Media Center for our first meeting!</h5>
                {/* <h5 style={{margin:"16px"}}>Currently on summer vacation, see you next school year👋</h5> */}
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
