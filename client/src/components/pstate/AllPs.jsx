import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPs } from '../../store/actions/psAct'
import PsComponent from './PsComponent'

const AllPs = (props) => {
    useEffect(() => {
        console.log(props.ps)
      // eslint-disable-next-line
    }, [])

    let psList = props.ps ? props.ps.ps.map((prob) => {
        return(
            <div key={prob._id} className='container d-flex justify-content-end'>
                <PsComponent problem={prob}/>
            </div>
        )
    }):null;

    // let psList = null
    
  return (
    <div className='container'>
        <h2 style={{borderBottom:"2px solid black"}}>Problem Statements</h2>
        <div className='container' style={{textAlign:"center"}}>
            <Link style={{width:"38%"}} type="button" class="btn btn-dark" to='/add-ps'>Add Ps</Link>
        </div>
        {props.ps? psList : <div>Loading...</div>}
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        ps: state.ps,
        auth: state.auth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        getProb: () => dispatch(getPs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPs)