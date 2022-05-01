import {SHOWS_LOADING, SHOWS_SUCCESS} from '../types'
import axios from '../../_axios'
import getConfig from '../../utils/config'

export const loadShows = () => async (dispatch, getState) => {
    dispatch({ type: SHOWS_LOADING })

    try {
        const result = await axios.get('api/shows/', getConfig(getState))
        dispatch({
            type: SHOWS_SUCCESS,
            payload: result.data,
        })
    } catch (err) {
        // a?
    }
}