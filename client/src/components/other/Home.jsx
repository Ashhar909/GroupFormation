import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getGroup } from '../../store/actions/groupAct'
import { getPs } from '../../store/actions/psAct'
import { Link } from 'react-router-dom'

const Home = (props) => {
  useEffect(() => {
    // console.log(props)
    props.getAll(props.auth.token);
    props.getProb()
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className='container'>
      <button className='btn-primary'><Link to='/all-ps'>Problems</Link></button>
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
    getProb : () => dispatch(getPs())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
