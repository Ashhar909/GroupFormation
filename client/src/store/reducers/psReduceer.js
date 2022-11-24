const initState = {
    ps:null,
    error:null
}

const psReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_PS_ERR':
            return{
                ...state,
                error:action.error
            }
        case 'FETCH_PS_ERR':
            return{
                ...state,
                error:action.error
            }
        case 'PS_FETCHED':
            return{
                ...state,
                ps:action.ps
            }
        case 'FETCH_SEARCH':
            return{
                ...state,
                ps:action.psStatment
            }
        case 'LOGOUT':
            return{
                ...state,
                error:null,
                ps:null
            }
        default:
            return state
    }
}


export default psReducer;