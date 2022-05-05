import {USER_LOADING, USER_SUCCESS, USER_FAILED, USER_LOGOUT} from '../types'

const initialState = {
    id: null,
    token: localStorage.getItem('token') || null,
    isAuthenticated: null,
    isLoading: false,
    isStaff: localStorage.getItem('isStaff') || null,
    username: null
}


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('isStaff', action.payload.isStaff)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            }
        case USER_FAILED:
            localStorage.removeItem('token')
            localStorage.removeItem('isStaff')
            return {
                ...state,
                token: null,
                username: null,
                isAuthenticated: false,
                isLoading: false,
                isStaff: false,
            }
        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case USER_LOGOUT:
            localStorage.removeItem('isStaff')
            localStorage.removeItem('token')
            return {
                ...state,
                username: null,
                token: null,
                isAuthenticated: false,
                isStaff: false,
            }
        default:
            return state
    }
}

export default Reducer