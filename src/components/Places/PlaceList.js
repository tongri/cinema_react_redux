import {Container, Grid} from '@mui/material'
import Place from './Place'

const PlaceList = ({list}) => {

    return list.length ? (
        <>
            <Container maxWidth="xl" sx={{ mt: 5}} >
                <Grid container spacing={2}>
                    {list.map(place => (
                        <Grid item xs={4} key={place.id}>
                            <Place {...place} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    ) : (
        <p className="text-center">No places yet...</p>
    )
}

export default PlaceList