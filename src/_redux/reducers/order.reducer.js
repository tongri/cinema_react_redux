import {ORDER_LOADING, ORDER_SUCCESS} from '../types'

const initialState = {
    isLoading: false,
    list: []
}


const Reducer = (state = initialState, action) => {
    switch (action.type){
        case ORDER_SUCCESS:
            return {
                ...state,
                list: action.payload.results,
                isLoading: false
            }
        case ORDER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}
export default Reducer
