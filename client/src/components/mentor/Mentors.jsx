import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getmentors } from "../../store/actions/mentorAct";
import Mentorcard from "./MentorCard";

const Mentors = (props) => {
  let mentorList = null;

  const data = async () => {
    await props.getmentors(props.auth.token)
    if(props.mentorData.mentors){
      mentorList = props.mentorData.mentors.map((mentor) => {
      return (
        <div key={mentor._id} className="col-md-3 my-3">
         <Mentorcard mentor={mentor}/>
      </div>
      )
    })}
  };

  useEffect(() => {    
    data()
    // eslint-disable-next-line
  }, [])


  return (
    <div>
      {mentorList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mentorData: state.mentor,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getmentors: (token) => dispatch(getmentors(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mentors);
