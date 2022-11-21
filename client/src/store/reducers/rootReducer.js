import authReducer from './authReducer'
import psReducer from './psReduceer'
import alertReducer from './alertReducer'
import groupReducer from './groupReducer'
import mentorReducer from './mentorReducer'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    auth:authReducer,
    ps:psReducer,
    grp: groupReducer,
    alert: alertReducer,
    mentor: mentorReducer
})

export default RootReducer;