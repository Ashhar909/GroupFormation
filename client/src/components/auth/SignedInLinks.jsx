import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authAct";
import { showAlert } from "../../store/actions/alertAct";
import { searchPs } from "../../store/actions/psAct";

const SignedInLinks = (props) => {
  const [search, setSearch] = useState({
    searchTerm:""
  })
  const Navigate = useNavigate();
  const handleClick = () => {
    props.logout();
    props.showAlert("Signed Out succesfully", "success");
    Navigate("/");
  };

  const handleChange = (e) => {
    setSearch({...search,
      [e.target.name]:e.target.value
    })
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // console.log(props)
    props.search(search, props.auth.token)
  }
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
            <Link className="nav-link active" to="/group">
              <h4>Group</h4>
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link active" to="/all-ps">
              <h4>Statments</h4>
            </Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link active" to="/group">
              <h4>Project</h4>
            </Link>
          </div>
          <div className="col-md-3 text-end mx-3 my-1">
            <form onSubmit={handleSearch}>
                <input type="search" name="searchTerm" className="form-control" placeholder="Search..." aria-label="Search" value={search.searchTerm} onChange={handleChange} style={{width: "150px"}}/>
            </form>
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
              marginLeft:"400px"
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
    showAlert: (msg, status) => dispatch(showAlert(msg,status)),
    search: (search, token) => dispatch(searchPs(search, token))
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(SignedInLinks);
