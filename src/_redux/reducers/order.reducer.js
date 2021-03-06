import {ORDER_LOADING, ORDER_SUCCESS} from '../types'

const initialState = {
    isLoading: false,
    total: 0,
    list: []
}


const Reducer = (state = initialState, action) => {
    switch (action.type){
        case ORDER_SUCCESS:
            return {
                ...state,
                list: action.payload.items,
                isLoading: false,
                total: action.payload.results.total
            }
        case ORDER_LOADING:
            return {
                ...state,
                isLoading: true,
                total: 0,
            }
        default:
            return state
    }
}
export default Reducer
