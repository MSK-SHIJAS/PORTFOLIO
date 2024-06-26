import React from 'react'

const Education = () => {
  return (
    <div className="color container my-5 text-white" >
      <h1 className="text-center mb-4">EDUCATION</h1>
      <div className="row">
        {/* First row of cards */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">2021-21</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>MSC COMPUTER SCIENCE</p>
                <footer className="blockquote-footer">PONDICHERRY UNIVERSITY</footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">2017-20</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>BSC COMPUTER SCIENCE</p>
                <footer className="blockquote-footer">MAMO COLLEGE</footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header">2015-17</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>COMPUTER SCIENCE</p>
                <footer className="blockquote-footer">KHSS</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      {/* Add more rows of cards as needed */}
    </div>
    
  )
}

export default Education
