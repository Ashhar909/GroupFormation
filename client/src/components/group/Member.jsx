import React from "react";

const Member = (props) => {
  const member = props.member;
  return (
    <div className="card card bg-light mb-3 mb-3" style={{maxWidth: "18rem"}}>
      <div className="card-header">{member.isLeader ? "Leader": "Member"}</div>
      <div className="card-body">
        <h5 className="card-title">{member.name}</h5>
      </div>
    </div>
  );
};

export default Member;
