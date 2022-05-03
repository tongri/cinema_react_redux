import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import Toolbar from '@mui/material/Toolbar'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {logoutUser} from '../../../_redux/actions/users.actions'
import {PAGE_MAIN} from '../../../consts/routes'
import {Link} from '@mui/material'



const pages = [{name: "Shows", path: PAGE_MAIN}, {name: "Pricing", path: PAGE_MAIN}];


const NavBar = ({ anchorElNav, handleCloseNavMenu, handleOpenNavMenu, children }) => {
    const dsp = useDispatch()
    const [anchorElUser, setAnchorElUser] = useState(null);
    const logoutHandler = () => dsp(logoutUser())

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    UA Cinema
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {
                            pages.map(({name, path}) => (
                                <MenuItem key={name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">
                                        <Link href={path} underline="none">
                                            {name}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))
                        }
                    </Menu>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    UA Cinema
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map(({name, path}) => (
                        <Button
                            key={name}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {name}
                        </Button>
                    ))}
                </Box>

                {children}
            </Toolbar>
        </>
    )
}

export default NavBar