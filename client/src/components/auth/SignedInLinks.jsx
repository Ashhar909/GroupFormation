import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../Store/Actions/Auth/AuthActions'

const SignedInLinks = (props) => {
    const Navigate = useNavigate()
    const handleClick = () => {
        props.logout();
        props.showAlert("Signed Out succesfully", "success")
        Navigate('/')
    }
  return (
    <div>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link active" to="/sign-in">
                <h4>Logout</h4>
                </Link>
            </li>
        </ul>
    </div>
  )
}

const mapDispatchToprops = (dispatch) => {
    return{
        logout : () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToprops)(SignedInLinks);