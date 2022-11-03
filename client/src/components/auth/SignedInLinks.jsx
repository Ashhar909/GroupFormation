import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authAct";
import { showAlert } from "../../store/actions/alertAct";

const SignedInLinks = (props) => {
  const Navigate = useNavigate();
  const handleClick = () => {
    props.logout();
    props.showAlert("Signed Out succesfully", "success");
    Navigate("/");
  };
  return (
    <div>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <div className="navbar-nav mr-auto">
          <div className="nav-item"></div>
          <div className="nav-item">
            <Link className="nav-link active" to="/home">
              <h4>Home</h4>
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/group">
              <h4>Group</h4>
            </Link>
          </div>
        </div>

        <div className="nav-link active">
          <h4
            style={{ 
              backgroundColor: "#c0e1ff",
              borderRadius: "100%",
              width: "40px",
              height: "40px",
              textAlign: "center",
              paddingTop: "5px",
              marginLeft:"780px"
            }}
          >
            {localStorage.getItem("name").slice(0, 1).toUpperCase()}
          </h4>
        </div>
        <Link className="nav-link active" onClick={handleClick} to="/sign-in">
          <h4 style={{marginLeft:"20px"}}>Logout</h4>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    grp: state.grp,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    showAlert: (msg, status) => dispatch(showAlert(msg,status))
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(SignedInLinks);
