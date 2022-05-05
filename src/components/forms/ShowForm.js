import {Box, Button, CircularProgress, TextField} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {createShow, updateShow} from '../../_redux/actions/shows.actions'
import {useState} from 'react'


export const ShowForm = ({ showId, film_id, place_id,
                             show_time_start=new Date().toJSON().slice(0, -8), price, title }) => {
    const dsp = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const [formValues, setFormValues] = useState({film_id, place_id, show_time_start, price})

    const submitHandler = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        setIsLoading(true)
        if (showId) return dsp(updateShow(showId, data))
        dsp(createShow(data))
    }
    const handleInput = (e) => {
        e.preventDefault()
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    return (
        <>
        <Box component="form" onSubmit={submitHandler} noValidate>
            <TextField
                margin="normal"
                required
                fullWidth
                id="place_id"
                label="Place Id"
                name="place_id"
                type="number"
                variant="standard"
                value={formValues.place_id}
                autoFocus
                onChange={e => handleInput(e)}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="film_id"
                label="Film Id"
                value={formValues.film_id}
                type="number"
                id="film_id"
                variant="standard"
                onChange={e => handleInput(e)}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="show_time_start"
                label="Show Time Start"
                variant="standard"
                id="confirm_password"
                type="datetime-local"
                value={formValues.show_time_start}
                onChange={e => handleInput(e)}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="price"
                label="Price"
                name="price"
                type="number"
                variant="standard"
                value={formValues.price}
                autoFocus
                onChange={e => handleInput(e)}
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, p: 1}}
                fontSize={30}
            >
                { isLoading ? <CircularProgress color="inherit" size={30} /> : title }
            </Button>
        </Box>
        </>
    )
}