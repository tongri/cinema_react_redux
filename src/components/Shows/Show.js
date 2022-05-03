import {Backdrop, Box, Button, Card, CardActions, CardContent, Link, Modal, TextField, Typography} from '@mui/material'
import secondsToHuman from '../../utils/secondsToHuman'
import {useState} from 'react'
import ModalForm from '../forms/ModalForm'
import OrderForm from '../forms/OrderForm'
import {PAGE_LOGIN} from '../../consts/routes'
import {ShowForm} from '../forms/ShowForm'
import {CustomDialog} from '../Layout/CustomDialog'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Show = (
    {id, place_name, film_name, show_time_start,
        price, isStaff=false, isAuthenticated = false,...tags}
) => {
    const [isBackDropOpen, setBackDropOpen] = useState(false)

    const handleBackDrop = () => {
        setBackDropOpen(prevSt => !prevSt)
    }

    let toLocal = new Date(show_time_start).toLocaleString()
    return (
        <>
            <CardContent sx={{ boxShadow: 3 }}>
                <Typography variant="h5" component="div">
                    {film_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    on {toLocal}
                </Typography>
                <Typography variant="body2">
                    starts at {toLocal}
                </Typography>
            </CardContent>
            {
                isAuthenticated ?
                    <CardActions>
                        <Button size="small" onClick={handleBackDrop}>Buy Tickets</Button>
                    </CardActions>
                    :
                    <Link href={PAGE_LOGIN} underline="none">
                        <CardActions>
                            <Button size="small">Login To Buy</Button>
                        </CardActions>
                    </Link>
            }
            {
                isStaff === true ? <p>You are staff</p> : null
            }
            <CustomDialog isDialogOpen={isBackDropOpen} setDialog={setBackDropOpen}  title={"Create Order"}>
                <OrderForm />
            </CustomDialog>
        </>
    )
}

export default Show