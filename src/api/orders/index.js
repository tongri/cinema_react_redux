import axios from '../../_axios'

export const createOrder = async (data, token) => {
    try {
        const result = await axios.post(
            'api/create_order/',
            data, token
        )
        return result
    } catch (err){
        return err
    }
}