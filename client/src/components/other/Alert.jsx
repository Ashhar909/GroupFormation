import React from 'react'
import { connect } from 'react-redux'

function Alert(props) {
    const capitalize = (word)=>{
        if(word === "danger") {
            word = "error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
      <div className='d-flex justify-content-center'>
        <div style={{height: '50px', width:"40%"}}>
        {props.alert.status && <div className={`alert alert-${props.alert.status} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.status)}</strong>: {props.alert.msg} 
        </div>}
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return{
    alert:state.alert
  }
}

export default connect(mapStateToProps)(Alert);