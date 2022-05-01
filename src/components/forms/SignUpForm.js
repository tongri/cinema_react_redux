import {useDispatch} from 'react-redux'
import {signUpUser} from '../../_redux/actions/users.actions'
import {Box, Button, Container, CssBaseline, TextField, Typography} from '@mui/material'


export const SignUpForm = () => {
    const dsp = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        const username = data.get('username')
        const password = data.get('password')
        const confirm_password = data.get('confirm_password')

        if (!username || !password) return alert("Fields can't be empty")
        if (password < 8) return alert("Make longer password")
        if (password !== confirm_password) return alert("Passwords must match")

        dsp(signUpUser({username, password}))
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirm_password"
                        label="Confirm Password"
                        type="password"
                        id="confirm_password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}