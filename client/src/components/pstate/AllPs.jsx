import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPs } from '../../store/actions/psAct'
import PsComponent from './PsComponent'

const AllPs = (props) => {
    useEffect(() => {
        console.log(props.ps)
      // eslint-disable-next-line
    }, [])

    let psList = props.ps ? props.ps.ps.map((prob) => {
        return(
            <div key={prob._id} className='container display-flex'>
                <PsComponent problem={prob}/>
            </div>
        )
    }):null;

    // let psList = null
    
  return (
    <div>
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