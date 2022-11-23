import React from 'react'
import { Link } from 'react-router-dom'

const PsComponent = (props) => {
    const ps = props.problem
  return (
    <div className='container my-3'>
        <Link to={`/ps/${ps._id}`} className="col text-center category_link">
    <div className="card" style={{ backgroundColor: "white"}}>
      <div className="card-body">
          <div className="d-flex">
            <h5 className="card-title p-2">Team Name:</h5>
            <h6 className="card-title p-2">{ps.TeamName}</h6>
          </div>
          <div className="d-flex">
              <h6 className="card-subtitle mb-2 text-muted">Problem Statment:</h6>
              <p className="card-text">{ps.ps}</p>
          </div>
          <div className="d-flex">
              <h6 className="card-subtitle mb-2 text-muted">Technology:</h6>
              <p className="card-text">{ps.Technology}</p>
          </div>
          <div className="d-flex justify-content-md-around">
              <div className="d-flex flex-row">
                  <div className="p-2"><h6>Domain:</h6></div>
                  <div className="p-2">{ps.domain}</div>
              </div>
              <div className="d-flex flex-row">
                  <div className="p-2"><h6>Uploaded By:</h6></div>
                  <div className="p-2">{ps.Username}</div>
              </div>
              <div className="d-flex flex-row">
                  <div className="p-2"><h6>Team Member:</h6></div>
                  <div className="p-2">3</div>
              </div>
              
  
            </div>

      </div>
    </div>
  
      
  </Link>
    </div>
  )
}

export default PsComponent