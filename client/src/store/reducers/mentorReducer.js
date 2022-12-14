const initState = {
    error: null,
    mentors:null,
}

const mentorReducer = (state = initState, action) => {
    switch(action.type){
        case 'MENTORS':
            return{
                ...state,
                mentors:action.mentors
            }
        case 'MENTOR_ERROR':
            return {
                ...state,
                error: action.error,
                group:null
            }
        case 'LOGOUT':
            return{
                ...state,
                error:null,
                mentors:null
            }
        default:
            return state
    }
}

export default mentorReducer