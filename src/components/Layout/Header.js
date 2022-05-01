import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import AuthenticatedNavBar from './Navbars/AuthenticatedNavBar'
import {useSelector} from 'react-redux'
import NotAuthenticatedNavBar from './Navbars/NotAuthenticatedNavBar'


const ResponsiveAppBar = () => {
    const isAuthenticated = useSelector(state => state.users.isAuthenticated)
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                {
                    isAuthenticated ?
                    <
                    AuthenticatedNavBar
                    anchorElNav={anchorElNav}
                    handleCloseNavMenu={handleCloseNavMenu}
                    handleOpenNavMenu={handleOpenNavMenu}
                    /> : <NotAuthenticatedNavBar
                            anchorElNav={anchorElNav}
                            handleCloseNavMenu={handleCloseNavMenu}
                            handleOpenNavMenu={handleOpenNavMenu}
                        />

                }
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
