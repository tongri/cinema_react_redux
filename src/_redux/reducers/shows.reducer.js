import {SHOWS_LOADING, SHOWS_SUCCESS} from '../types'
import axios from '../../_axios'


const initialState = {
    isLoading: false,
    list: []
}


const Reducer = (state = initialState, action) => {
    switch (action.type){
        case SHOWS_SUCCESS:
            return {
                ...state,
                list: action.payload.results,
                isLoading: false
            }
        case SHOWS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}
export default Reducer