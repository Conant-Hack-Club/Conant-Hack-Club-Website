import React, {useState, useEffect} from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {db} from "./firebase"
export default function TopNavbar() {
    const [data, setData] = useState([]);

    useEffect(() => {
        db.collection('years').onSnapshot(snapshot => {
            setData(snapshot.docs.map(doc => ({
                id: doc.id,
                firedata: doc.data()
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
                        data.map(({id, firedata}) => (
                            <NavDropdown.Item key={id} href={"/projects/" + firedata.year + "&" + id}>{firedata.year}</NavDropdown.Item>
                        ))
                    }
                </NavDropdown>
            </Navbar.Collapse>
        </Navbar>
    );
}
