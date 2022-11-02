import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGroup } from '../../store/actions/groupAct'

const Home = (props) => {
  useEffect(() => {
    // console.log(props)
    props.getAll(props.auth.token);
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
    getAll : (token) => dispatch(getGroup(token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
