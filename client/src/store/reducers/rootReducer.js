import authReducer from './authReducer'
import psReducer from './psReduceer'
import groupReducer from './groupReducer'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    auth:authReducer,
    ps:psReducer,
    grp: groupReducer
})

export default RootReducer;