import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createUser } from '../../store/actions/authAct';

const Signup = (props) => {
  const [creds, setCreds] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.createAccount(creds);
    if (localStorage.getItem("token")) {
      alert("Signed up succesfully", "success");
      // Navigate("/home");
    } else {
      alert("Enter Valid Credentials", "danger");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            name='name'
            value={creds.name}
            onChange={handleChange}
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name='email'
            value={creds.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name='password'
            value={creds.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
  )
}

const mapDispatchToprops = (dispatch) => {
  return {
    createAccount: (creds) => dispatch(createUser(creds)),
  };
};

export default connect(null, mapDispatchToprops)(Signup);
