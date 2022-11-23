import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGroup } from '../../store/actions/groupAct'
import { getPs } from '../../store/actions/psAct'

const Home = (props) => {
  useEffect(() => {
    // console.log(props)
    props.getAll(props.auth.token);
    props.getProb(props.auth.token);
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
    grp: state.grp
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getAll : (token) => dispatch(getGroup(token)),
    getProb : (token) => dispatch(getPs(token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
