import React, {useState, useEffect} from 'react'
import { Media  } from 'react-bootstrap'
import "../static/css/mediascreen.css";

export default function MediaBody(props) {
    const [link, setLink] = useState("")

    useEffect(() => {
        setLink("../" + props.name + ".jpg")
    })
    return (
        <div className = "mediaBody">
            <Media>
                <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={link}
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