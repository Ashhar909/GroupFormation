import React from 'react'
import GrpList from './GrpList'
import { connect } from 'react-redux'
import GrpActions from './GrpActions'

const GroupPage = (props) => {
  return (
    <div>
    {
      props.grp.group? <GrpList/> : <GrpActions/> 
    }
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      grp: state.grp
    };
  };

export default connect(mapStateToProps)(GroupPage);