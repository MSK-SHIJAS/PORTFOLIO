import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import me from './about.png';

const About = () => {
  return (
    <div className='color'>
      <Container className='mt-5 bg' >
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col>
                                <h3 className='ab'>KNOW WHO IAM</h3>
                                <h1 className='ab2' >Hi Everyone, Muhammed Shijas K from Kerala, India.
I am currently employed as a software developer at Juspay.
I have completed Integrated MSc (IMSc) in Maths and Computing at BIT Mesra.</h1>
                        
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
            </Container>
    </div>
  )
}

export default About
