import React from 'react'
import { Media  } from 'react-bootstrap'
import "../static/css/mediascreen.css";

export default function MediaBody(props) {
    return (
        <div className = "mediaBody">
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src="https://api.compscikids.net/getImage?dir=images&name=25f43e648ae92bbc0b65b4004479ac59"
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h3>{props.title}</h3>
                    <h5> {props.name}</h5>
                    <p>
                    {props.text}
                    </p>
                </Media.Body>
            </Media>
            
        </div>
        
    );
};