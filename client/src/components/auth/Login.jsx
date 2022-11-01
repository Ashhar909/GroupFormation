import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../store/actions/authAct'


 const Login = (props) => {
  const [creds, setCreds] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setCreds({ ...creds,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await props.authenticate(creds);
    if (localStorage.getItem("token")) {
      alert("Logged In succesfully", "success");
      // Navigate("/home");
    } else {
      alert("Enter Valid Credentials", "danger");
    }
    // console.log(creds)
  }
   return (
    <form onSubmit={handleSubmit}>
    <h3>Sign In</h3>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        value={creds.email}
        name="email"
        onChange={handleChange}
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        value={creds.password}
        name="password"
        onChange={handleChange}
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </div>
    
    <p className="forgot-password text-center">
      Not registered <a href="/sign-up">sign up?</a>
    </p>
  </form>
   )
 }
 
 const mapStateToProps = (state) => {
  return {
    authstat: state.auth,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    authenticate: (creds) => dispatch(login(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Login);
