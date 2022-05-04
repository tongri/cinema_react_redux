import Show from './Show'
import {Container, Grid} from '@mui/material'
import {useSelector} from 'react-redux'

const ShowList = ({list}) => {

    const isAuthenticated = useSelector(state => state.users.isAuthenticated)
    const isStaff = useSelector(state => state.users.isStaff)

    return list.length ? (
        <>
            <Container maxWidth="xl" sx={{ mt: 5}} >
                <Grid container spacing={2}>
                {list.map(show => (
                    <Grid item xs={4} key={show.id}>
                        <Show {...show} isStaff={isStaff} isAuthenticated={isAuthenticated}/>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </>
    ) : (
        <p className="text-center">No shows yet...</p>
    )
}

export default ShowList