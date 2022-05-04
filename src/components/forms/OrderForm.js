import {Box, Button, TextField} from '@mui/material'
import {createOrder} from '../../api/orders'
import {useSelector} from 'react-redux'

const OrderForm = ({ showId }) => {
    const token = useSelector(st => st.users.token)

    const submitHandler = (e) =>  {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        const result = createOrder({show_id: showId, amount: data.get('amount')}, token)
    }
    return (
        <>
            <Box component="form" onSubmit={submitHandler} noValidate>
                <TextField
                    variant="filled"
                    placeholder="Enter ticket amount"
                    id="amount"
                    name="amount"
                    type="number"
                    min={1}
                   fullWidth
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, p: 1 }}
                    fontSize={30}
                >
                    buy tickets
                </Button>
            </Box>
        </>
    )
}

export default OrderForm