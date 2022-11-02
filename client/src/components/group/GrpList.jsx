import React, { useEffect } from "react";
import { connect } from "react-redux";
import Member from "./Member";

const GrpList = (props) => {
  let grplist = null;
  if(props.grp){
    grplist = props.grp.group.map((member) => {
    return (
      <div key={member._id} className="col-md-3 my-3">
        <Member member={member}/>
      </div>
    )
  })}
  useEffect(() => {
    console.log(props.grp)
  }, [])

  return (
    <div className="container">
      <div className="row" style={{
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
          Group
        </h2>
        {props.grp ? grplist : <div>Loading...</div>}


      </div>
          <div className="grpBut" style={{
            marginLeft:"120px",
            width: "82%",
          }}>
            <button className="btn btn-primary mx-3" >LeaveGroup</button>
          </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    grp: state.grp
  };
};

export default connect(mapStateToProps)(GrpList);
