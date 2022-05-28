import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {loadOrders} from '../_redux/actions/order.actions'


const OrdersPage = () => {
    const { list, isLoading, total } = useSelector(state => state.orders)
    const token = useSelector(state => state.users.token)

    const dsp = useDispatch()
    useEffect(() => {
        dsp(loadOrders())
    }, [token, dsp])
    return (
        <>
            {list.map(order =>(
                <h1>{order.id}</h1>
            ))}
        </>
    )
}

export default OrdersPage