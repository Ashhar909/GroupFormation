import React, { useState } from "react";
import { connect } from "react-redux";
import { createPs } from "../../store/actions/psAct";

const AddPs = (props) => {
    const [creds, setCreds] = useState({
        ps:"",
        domain:"",
        Technology: "",
        TeamName: "",
        Username: "",
    })

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(creds, props.auth.token)
        props.addProb(creds, props.auth.token);
    }
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Enter Your Problem Statment
                      </p>

                      <form>
                        <div className="d-flex flex-row align-items-center mb-1">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example1c">
                              {" "}
                              Problem Statment
                            </label>
                            <textarea
                              id="name"
                              className="form-control"
                              name="ps"
                              value={creds.ps}
                              rows="2"
                              placeholder="problem statment"
                              onChange={handleChange}
                              required
                            ></textarea>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">
                              DOMAIN
                            </label>
                            <input
                              type="text"
                              id="form3Example3c"
                              className="form-control"
                              value={creds.domain}
                              name="domain"
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4c">
                              Technology
                            </label>
                            <div className="technologyList">
                              <div className="technologyDiv mb-1">
                                <input
                                  type="text"
                                  id="form3Example4c"
                                  className="form-control"
                                  name="Technology"
                                  value={creds.Technology}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            {/* <div className="d-flex justify-content-end mx-1 mb-1 mb-lg-1">
                              <button
                                type="button"
                                className="btn btn-outline-primary"
                                id="addTechnologysBtn"
                              >
                                {" "}
                                +{" "}
                              </button>
                            </div> */}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4cd">
                              Team Name
                            </label>
                            <input
                              type="text"
                              id="form3Example4cd"
                              className="form-control"
                              name="TeamName"
                              value={creds.TeamName}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onClick={handleSubmit}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <image
                        src="/Users/mohd.ashharullah/Documents/certificates/Ashhar.JPG"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addProb: (creds, token) => dispatch(createPs(creds, token))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddPs);
