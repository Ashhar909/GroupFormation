const initState = {
    error: null,
    group:null,
    user:null
}

const groupReducer = (state = initState, action) => {
    switch(action.type){
        case 'MEMBERS':
            return{
                ...state,
                user:action.user,
                group:action.members
            }
        case 'CREATE':
            return{
                ...state,
                user:action.user,
                error:null
            }
        case 'LEAVE':
            return{
                ...state,
                user:action.user,
                group:null
            }
        case 'JOIN':
            return{
                ...state,
                error:action.error,
                user:action.user,
            }
        case 'GRP_ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default groupReducer