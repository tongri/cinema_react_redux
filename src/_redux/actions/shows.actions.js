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


export const createShow = (data) => async (dispatch, getState) => {
    try {
        const result = await axios.post(
            'api/shows/',
            data,
            getConfig(getState)
        )
        dispatch(loadShows())
    } catch (err){
        console.log(err)
    }
}


export const updateShow = (show_id, data) => async (dispatch, getState) => {
    try {
        const result = await axios.patch(
            `api/shows/${show_id}/`,
            data,
            getConfig(getState)
        )
        dispatch(loadShows())
    } catch (err){
        console.log(err)
    }
}
