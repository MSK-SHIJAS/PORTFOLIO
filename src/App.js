import React from 'react';
import './App.css';
import './float.css'; // Importing CSS file=
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import me from './about.png';
import { ReactTyped as Typed } from 'react-typed'; // Correct import
import Navbars from './Navbars'; // Assuming Navbars component is in a separate file
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col>
                                <h3 className='heading-name'>Hi There!</h3>
                                <h1 className='main-name fw-bold' > I'M MUHAMMED SHIJAS K</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                    <img
                src={me}
                alt="me"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
                    </Col>
                </Row>
                <p style={{ fontSize: "1.2rem ", fontWeight: "600" }}>
          I am a
          <span style={{ marginLeft: "8px" }}>
            <Typed
              strings={[
                "Fullstack Developer",
                "Trainer",
              ]}
              typeSpeed={60}
              backSpeed={60}
              loop
            />
          </span>
        </p>
            </Container>
        
        </>
        
    );
}

export default App;