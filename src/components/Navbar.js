import React, {useState, useEffect} from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
// import firebase from "./firebase";
import {db} from "./firebase"
import ProjectsCarouselScreen from "./ProjectsCarouselScreen";
export default function TopNavbar() {

    // const data = {
    //
    // }
    const [data, setData] = useState([]);

    useEffect(() => {
        // firebase.database().ref("Projects").once('value', function (snapshot) {
        //     snapshot.forEach(function (yearRef) {
        //         alert(yearRef.key);
        //         setData(data)
        //     });
        // });
        db.collection('projects').onSnapshot(snapshot => {
            setData(snapshot.docs.map(doc => ({
                id: doc.id,
                year: doc.data()
            })))
        })
    }, []);

    return (
        //CAN USE TRANSPARENT
        <Navbar bg="light" expand="lg" fixed="top" variant="blue">
            <Navbar.Brand href="/">CONANT HACK CLUB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/resources">Resources</Nav.Link>
                </Nav>
                <NavDropdown  id="nav" title="Projects" >
                    {
                        data.map(({id, year}) => (
                            <NavDropdown.Item href="/projects">{year.year}</NavDropdown.Item>
                        ))
                    }
                    {/*<NavDropdown.Item href="/projects">2020-2021</NavDropdown.Item>*/}
                    {/*<NavDropdown.Item href="#action/3.2">2021-2022</NavDropdown.Item>*/}
                    {/*<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    );
}
