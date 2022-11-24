import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGroup } from '../../store/actions/groupAct'
import { getmentors } from '../../store/actions/mentorAct'
import { getPs } from '../../store/actions/psAct'

const Home = (props) => {
  useEffect(() => {
    // console.log(props)
    props.getAll(props.auth.token);
    props.getProb(props.auth.token);
    props.getmentors(props.auth.token)
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>

    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    grp: state.grp,
    user: state.grp.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getAll : (token) => dispatch(getGroup(token)),
    getProb : (token) => dispatch(getPs(token)),
    getmentors: (token) => dispatch(getmentors(token)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
