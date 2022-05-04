import axios from '../../_axios'
import {config} from '../../utils/config'

export const createOrder = (data, token) => {
    try {
        console.log('res ')
        config.headers['Authorization'] = `Token ${token}`
        const result = axios.post(
            'api/create_order/',
            data,
            config
        ).then(res => res)
    } catch (err){
        return err
    }
}