import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createGroup, joinGroup } from '../../store/actions/groupAct';

const GrpActions = (props) => {
  
  const Navigate = useNavigate();
  const [creds, setCreds] = useState({
    group: "",
    groupPass: "",
  });

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await props.create(creds, props.auth.token)
    if(localStorage.getItem("create-action")){
      alert("group Created")
      Navigate('/home')
    }
    else{
      alert(localStorage.getItem("grp-error"))
    }
  }

  const handleJoin = async (e) => {
    e.preventDefault();
    await props.join(creds, props.auth.token)
    if(localStorage.getItem("join-action")){
      alert("group Joined")
      Navigate('/home')
    }
    else{
      alert(localStorage.getItem("grp-error"))
    }
  }
  return (
    <div className='container' style={{
      marginLeft:"120px",
      width: "82%",
    }}>
  <h2
    className="my-5"
    style={{
      borderBottom: "2px solid black",
      paddingLeft: "0px",
    }}
  >
    Group Actions
  </h2>
    <div className="auth-inner">
        <form>
          <h3>Credentials</h3>
          <div className="mb-3">
            <label>Group Name</label>
            <input
              type="text"
              value={creds.group}
              name="group"
              onChange={handleChange}
              className="form-control"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="mb-3">
            <label>Group Password</label>
            <input
              type="password"
              value={creds.groupPass}
              name="groupPass"
              onChange={handleChange}
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" onClick={handleCreate} style={{width:"80px"}}>
              Create
            </button>
            <button className="btn btn-primary" onClick={handleJoin} style={{width:"80px"}}>
              Join
            </button>
          </div>
        </form>
      </div>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    grp: state.grp
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    create: (creds,token) => dispatch(createGroup(creds,token)),
    join: (creds,token) => dispatch(joinGroup(creds,token)),
  };
};


export default connect(mapStateToProps,mapDispatchToprops)(GrpActions)