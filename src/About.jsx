import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import me from './about.png';
import { FaGamepad, FaPlane, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <Container className='mt-2'>
        <Row>
          <Col md={8}>
            <Row>
              <Col>
                <h3 className='ab'>GET TO KNOW ME</h3>
                <h5 className='ab2'>
                  Hi Everyone, I'm Muhammed Shijas K from Kerala, India.
                  I am currently doing an internship on 
                  <span style={{ color: 'blue' }}> MERN stack </span> 
                  at SOFTRONICS (CALICUT).
                  I have completed my postgraduation from 
                  <span style={{ color: 'blue' }}> Pondicherry University </span>.
                </h5>
                <h3>Besides coding, I enjoy engaging in other activities:</h3>
                <ul>
                  <li><FaGamepad /> Playing Games</li>
                  <li><FaPlane /> Travelling</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <img
              src={me}
              alt="me"
              className="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h3>Contact Details</h3>
            <ul className='list-unstyled'>
              <li className='mb-2'>
                <FaFacebook className='me-2' /> Facebook
              </li>
              <li className='mb-2'>
                <FaInstagram className='me-2' /> Instagram
              </li>
              <li className='mb-2'>
                <FaLinkedin className='me-2' /> LinkedIn
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <h3>Send me a Message</h3>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Label>Your Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formFeedback">
                <Form.Label>Feedback</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Your feedback" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
