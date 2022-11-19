import React, { useEffect } from 'react'
import GrpList from './GrpList'
import { connect } from 'react-redux'
import GrpActions from './GrpActions'
import Mentors from '../mentor/Mentors'

const GroupPage = (props) => {
  useEffect(() => {
    console.log(props.user)
    // eslint-disable-next-line
  }, [])
  

  return (
    <div>
    {
      props.grp.group? <GrpList/> : <GrpActions/> 
    }
    {
      props.user.isLeader? <Mentors/> : null
    }
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      grp: state.grp,
      user: state.grp.user
    };
  };

export default connect(mapStateToProps)(GroupPage);