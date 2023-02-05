import * as React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";


const settings = [
    {
        "id": 1,
        "name": 'صفحه شخصی',
        "link": '/user'
    },
    {
        "id": 2,
        "name": 'خروج از حساب کاربری',
        "link": '/logout'
    },
];


export const Login = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const name = localStorage.getItem('auth_name');


    let AuthButton = '';
    if (!localStorage.getItem('auth_token')) {
        AuthButton = (
            <>
                <Box sx={{'& button': {m: 1}}}>
                    <Link to="/login">
                        <Button size="medium" variant="outlined" sx={{fontWeight: 'bold'}}>ورود|ثبت نام</Button>
                    </Link>
                </Box>
            </>
        );
    } else {
        AuthButton = (
            <>
                <Box sx={{flexGrow: 0}}>
                    <Tooltip title="پروفایل کاربری">
                        <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                            <Avatar/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{mt: '45px'}}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                                <Link to={setting.link}>
                                    <Typography textAlign="center">{setting.name}</Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </>
        );
    }

    return (
        <div>
            {AuthButton}
        </div>
    );
};


