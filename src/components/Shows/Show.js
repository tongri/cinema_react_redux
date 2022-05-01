import {Button, CardActions, CardContent, Typography} from '@mui/material'

const Show = (
    {id, place_name, film_name, show_time_start, show_time_end,
        price, isStaff=false, isAuthenticated = false,...tags}
) => {
    const secondsToHuman = (seconds) => {
        let secondsInMinute = 60
        let secondsInHours = 60 * secondsInMinute
        let hours = Math.floor(seconds / secondsInHours)
        let minutes = Math.floor((seconds - hours * secondsInHours) / secondsInMinute)
        return `${hours}h ${minutes}m`
    }
    let toLocal = new Date(show_time_start).toLocaleString()
    let lasts = (new Date(show_time_end) - new Date(show_time_start)) / 1000
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
                    lasts for {secondsToHuman(lasts)}
                </Typography>
            </CardContent>
            {
                isAuthenticated ?
                    <CardActions>
                        <Button size="small">Buy Tickets</Button>
                    </CardActions> :
                    <CardActions>
                        <Button size="small">Login To Buy</Button>
                    </CardActions>
            }
            {
                isStaff === "true" ? <p>You are staff</p> : null
            }
        </>
    )
}

export default Show