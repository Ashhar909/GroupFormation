import React from 'react'
import { Link } from 'react-router-dom'

const PsComponent = (props) => {
    const ps = props.problem
  return (
    <div className='container my-3' style={{width:"50%"}}>
        <Link to={`/ps/${ps._id}`} className="text-dark" style={{textDecoration:"none"}}>
        <div class="card">
  <div class="card-header">
  <h5 className="card-title p-2">Team Name: {ps.TeamName}</h5>
  </div>
  <div class="card-body">
    <p class="card-text mx-1"><strong>Statment: </strong>{ps.ps}</p>
    <p class="card-text mx-1"><strong>Domain: </strong>{ps.domain}</p>
    <p class="card-text mx-1"><strong>Technology: </strong>{ps.Technology}</p>
  </div>
</div>
  </Link>

  
    </div>
  )
}

export default PsComponent