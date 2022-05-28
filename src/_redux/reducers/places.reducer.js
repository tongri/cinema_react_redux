import {PLACES_SUCCESS, PLACES_LOADING} from '../types'


const initialState = {
    isLoading: false,
    list: []
}


const Reducer = (state = initialState, action) => {
    switch (action.type){
        case PLACES_SUCCESS:
            return {
                ...state,
                list: action.payload.items,
                isLoading: false
            }
        case PLACES_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}
export default Reducer