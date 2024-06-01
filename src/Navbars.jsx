import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { BsHouseFill, BsCardChecklist, BsFileText, BsBriefcaseFill, BsPeopleFill } from 'react-icons/bs'; // Importing relevant icons
import { FaUserGraduate } from 'react-icons/fa'; // Importing icon for skills
import { FaCode } from 'react-icons/fa'; // Importing icon for coding
import { Outlet } from 'react-router-dom';

const Navbars = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/home" className="ms-5">Your Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/" className="nav-link active">
                        <BsHouseFill className="mr-1" /> Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="projects" className="nav-link">
                        <BsBriefcaseFill className="mr-1" /> Projects
                    </Nav.Link>
                    <Nav.Link as={Link} to="skills" className="nav-link">
                        <FaCode className="mr-1" /> Skills
                    </Nav.Link>
                    <Nav.Link as={Link} to="education" className="nav-link">
                        <FaUserGraduate className="mr-1" /> Education
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" className="nav-link">
                        <BsPeopleFill className="mr-1" /> About
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Outlet/>
        </>
    );
}

export default Navbars;
