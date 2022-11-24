import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../../store/actions/alertAct";
import { leaveGroup } from "../../store/actions/groupAct";
import Member from "./Member";

const GrpList = (props) => {
  const Navigate = useNavigate()

  let grplist = null;
  if(props.grp.group){
    grplist = props.grp.group.map((member) => {
    return (
      <div key={member._id} className="col-md-3 my-3">
        <Member member={member}/>
      </div>
    )
  })}

  const handleLeave = async(e) => {
    e.preventDefault();
    await props.leave(props.auth.token)

    if(!localStorage.getItem('create-action')){
      props.showAlert("group Left", "success");
      Navigate('/home')
    }
    else{
      props.showAlert(localStorage.getItem("grp-error"), "warning")
    }
  }

  return (
    <div className="container">
      <div className="row" >
        <h2
          className="my-5"
          style={{
            borderBottom: "2px solid black",
            paddingLeft: "0px",
          }}
        >
          Group
        </h2>
        {props.grp ? grplist : <div>Loading...</div>}


      </div>
          <div className="d-flex justify-content-center" >
            <button className="btn btn-primary mx-3" style={{width:"20%"}} onClick={handleLeave}>LeaveGroup</button>
          </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    grp: state.grp,
    auth: state.auth
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    leave : (token) => (dispatch(leaveGroup(token))),
    showAlert: (msg, status) => dispatch(showAlert(msg,status))
  }
}

export default connect(mapStateToProps,mapDispatchToprops)(GrpList);
