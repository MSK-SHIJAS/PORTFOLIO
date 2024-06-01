import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaDatabase, FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="container my-5 color text-white">
      <h1 className="text-center mb-4 ">SKILLS</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <FaHtml5 className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">HTML</h5>
            </div>
          </div>
        </div>
        {/* Repeat the card structure for other skills */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <FaCss3Alt className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">CSS</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <FaBootstrap className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">BOOTSTRAP</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <FaReact className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">REACT</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <FaDatabase className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">MySQL</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <FaGithub className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">GIT</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
