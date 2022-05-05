import {Button, CardActions, CardContent, CircularProgress, Typography} from '@mui/material'
import {useState} from 'react'
import OrderForm from '../forms/OrderForm'
import {PAGE_LOGIN} from '../../consts/routes'
import {CustomDialog} from '../Layout/CustomDialog'
import {useNavigate} from 'react-router-dom'
import {ShowForm} from '../forms/ShowForm'
import {useDispatch} from 'react-redux'
import {deleteShow} from '../../_redux/actions/shows.actions'


const Show = (
    {id, place_name, place_id, film_name, film_id, show_time_start,
        price, isStaff=false, isAuthenticated = false,...tags}
) => {
    const dsp = useDispatch()
    const navigate = useNavigate()
    const [isOrderDialogOpen, setOrderDialog] = useState(false)
    const [isShowDialogOpen, setShowDialog] = useState(false)
    const [isDeleteLoading, setDeleteLoading] = useState(false)

    const handleDelete = () => {
        setDeleteLoading(true)
        dsp(deleteShow(id))
        setDeleteLoading(false)
    }

    const handleOrderDialog = () => {
        setOrderDialog(false)
    }

    const handleShowDialog = () => {
        setShowDialog(false)
    }


    return (
        <>
            <CardContent sx={{ boxShadow: 10, borderRadius: '13px', backgroundColor: '#bbdefb' }}>
                <Typography variant="h5" component="div">
                    {film_name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    costs ${price}
                </Typography>
                <Typography variant="body2">
                    starts at {show_time_start}
                </Typography>
            </CardContent>
            {
                isAuthenticated ?
                    <CardActions>
                        <Button size="small" onClick={() => setOrderDialog(true)}>Buy Tickets</Button>
                        {
                            isStaff === true &&
                            <>
                                <Button size="small" onClick={() => setShowDialog(true)}>
                                    Edit
                                </Button>
                                <Button size="small" onClick={() => deleteShow(id)}>
                                    { isDeleteLoading ?
                                        <CircularProgress color="inherit" size={15}/> :
                                    "Delete"}
                                </Button>
                            </>
                        }
                    </CardActions>
                    :
                    <CardActions>
                        <Button size="small" onClick={() => navigate(PAGE_LOGIN)}>Login To Buy</Button>
                    </CardActions>
            }
            <CustomDialog isDialogOpen={isOrderDialogOpen} setDialog={handleOrderDialog}  title={"Create Order"}>
                <OrderForm showId={id}/>
            </CustomDialog>
            <CustomDialog isDialogOpen={isShowDialogOpen} setDialog={handleShowDialog}  title={"Edit Show"}>
                <ShowForm showId={id} place_id={place_id} show_time_start={show_time_start.slice(0, -4)} price={price}
                    film_id={film_id} title="edit show"/>
            </CustomDialog>
        </>
    )
}

export default Show