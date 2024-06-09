import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaReact, 
  FaDatabase, 
  FaGithub, 
  FaNodeJs, 
  FaJsSquare 
} from "react-icons/fa";
import { DiMongodb, DiJavascript1 } from "react-icons/di";
import { SiExpress } from "react-icons/si";

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
        <div className="col-md-4 mb-4">
          <div className="card">
            <FaNodeJs className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">Node.js</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <DiMongodb className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">MongoDB</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <SiExpress className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">Express.js</h5>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <FaJsSquare className="card-img-top m-auto mt-3" style={{ fontSize: '5rem' }} />
            <div className="card-body text-center">
              <h5 className="card-title">JavaScript</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
