import axios from '../../_axios'
import getConfig from '../../utils/config'
import {ORDER_LOADING, ORDER_SUCCESS} from '../types'



export const loadOrders = () => async (dispatch, getState) => {
    dispatch({ type: ORDER_LOADING })

    try {
        const result = await axios.get('api/orders/', getConfig(getState))
        dispatch({
            type: ORDER_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        // a?
    }
}


export const createOrder = (data) => async (dispatch, getState) => {
    dispatch({ type: ORDER_LOADING })

    try {
        const result = await axios.post('api/create_order/', data, getConfig(getState))
        dispatch({
            type: ORDER_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        // a?
    }
}
