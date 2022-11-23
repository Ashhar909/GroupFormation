import React, { useEffect } from 'react'

const Mentorcard = (props) => {
  const mentor = props.mentor
    useEffect(() => {
        console.log(props.mentor)
        // eslint-disable-next-line
    }, [])
  return (
    <div className="card card bg-light mb-3 mb-3" style={{maxWidth: "18rem"}}>
      <div className="card-header">Mentor</div>
      <div className="card-body">
        <h5 className="card-title">{mentor.name}</h5>
      </div>
    </div>
  )
}

export default Mentorcard