import {Box, Button, TextField} from '@mui/material'
import {useDispatch} from 'react-redux'
import {createShow} from '../../_redux/actions/shows.actions'
import {useState} from 'react'


export const ShowForm = () => {
    const dsp = useDispatch()
    const [showTimeValue, setShowTimeValue] = useState("2018-06-12T19:30")

    const submitHandler = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        dsp(createShow(data))
    }
    const handleTimeInput = (e) => {
        setShowTimeValue(e.target.value)
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
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="film_id"
                label="Film Id"
                type="number"
                id="password"
                variant="standard"
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
                value={showTimeValue}
                onChange={handleTimeInput}
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
                autoFocus
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, p: 1}}
                fontSize={30}
            >
                Create Show
            </Button>
        </Box>
        </>
    )
}