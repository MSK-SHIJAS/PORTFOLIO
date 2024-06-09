import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from 'react-icons/fa';
import html from '../src/htm.jpeg';
import fs from '../src/tr.png';
import ss from '../src/cctv.jpg';
import recipe from './rp.png';

const Projects = () => {
  const carouselItemStyle = {
    height: '500px'
  };

  const cardFooterStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '10px'
  };

  const cardImageStyle = {
    width: '100%',
    objectFit: 'contain',
    transition: 'transform 0.3s'
  };

  return (
    <>
      <Carousel>
        <Carousel.Item style={carouselItemStyle}>
          <Link to="/project1">
            <img
              className="d-block w-100"
              src={fs}
              alt="First slide"
              style={{ height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </Link>
          <div className="carousel-caption d-none d-md-block">
            <h5>PG PROJECT</h5>
            <p>ENGLISH TO MALAYALAM TRANSLITERATION USING MACHINE LEARNING</p>
          </div>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <Link to="/project2">
            <img
              className="d-block w-100"
              src={ss}
              alt="Second slide"
              style={{ height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </Link>
          <div className="carousel-caption d-none d-md-block">
            <h5>UG PROJECT</h5>
            <p>CCTV SURVEILLANCE AND FAULT DETECTION</p>
          </div>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <Link to="/project3">
            <img
              className="d-block w-100"
              src={html}
              alt="Third slide"
              style={{ height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
          </Link>
        </Carousel.Item>
      </Carousel>
      
      <div className="container mt-3">
        <h3>Other Projects</h3>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <Link to="https://react-recipe-finder-navy.vercel.app/">
                <img 
                  src={recipe} 
                  className="card-img-top m-auto" 
                  alt="Project Image" 
                  style={cardImageStyle}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </Link>
              <div className="card-body text-center">
                <h5 className="card-title">REACT RECIPE FINDER</h5>
                <div style={cardFooterStyle}>
                  <FaHtml5 size={24} />
                  <FaCss3Alt size={24} />
                  <FaReact size={24} />
                  <FaJsSquare size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <Link to="/project5">
                <img 
                  src={recipe} 
                  className="card-img-top m-auto" 
                  alt="Project Image" 
                  style={cardImageStyle}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </Link>
              <div className="card-body text-center">
                <h5 className="card-title">HTML</h5>
                <div style={cardFooterStyle}>
                  <FaHtml5 size={24} />
                  <FaCss3Alt size={24} />
                  <FaReact size={24} />
                  <FaJsSquare size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <Link to="/project6">
                <img 
                  src={recipe} 
                  className="card-img-top m-auto" 
                  alt="Project Image" 
                  style={cardImageStyle}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </Link>
              <div className="card-body text-center">
                <h5 className="card-title">HTML</h5>
                <div style={cardFooterStyle}>
                  <FaHtml5 size={24} />
                  <FaCss3Alt size={24} />
                  <FaReact size={24} />
                  <FaJsSquare size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
