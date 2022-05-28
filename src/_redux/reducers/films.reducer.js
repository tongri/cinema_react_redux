import {FILMS_LOADING, FILMS_SUCCESS} from '../types'


const initialState = {
    isLoading: false,
    list: []
}


const Reducer = (state = initialState, action) => {
    switch (action.type){
        case FILMS_SUCCESS:
            return {
                ...state,
                list: action.payload.items,
                isLoading: false
            }
        case FILMS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}
export default Reducer