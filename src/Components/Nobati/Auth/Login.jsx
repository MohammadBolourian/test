
import * as React from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Avatar, Tooltip, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Menu} from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Login = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const name = localStorage.getItem('auth_name');
    const navigate =useNavigate();

    const logout = (e) =>{
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post("/api/logout").then(res => {
                if (res.data.status === 200) {
                    localStorage.removeItem('auth_token');
                    localStorage.removeItem('auth_name');
                    localStorage.removeItem('auth_mobile');
                    localStorage.removeItem('auth_type');
                    navigate("/");
                } else {
                    console.log("logout error");
                }
            });
        })
    }
    let AuthButton = '';
    if(!localStorage.getItem('auth_token')) {
        AuthButton =(
            <>
                <Link to="/login">
                <Box sx={{ '& button': { m: 1 } }} >
                    <Button size="medium" variant="outlined" sx={{fontWeight:'bold'}}>ورود|ثبت نام</Button>
                </Box>
                </Link>
            </>
        );
    }else{
        AuthButton =(
            <>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="پروفایل کاربری">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt={name}/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center" sx={{fontFamily:'Vazir'}}>{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                {/*<p>سلام {name}</p>*/}
                {/*<button type="button" onClick={logout}>logout</button>*/}
                {/*<Link to="/user">پروفایل</Link>*/}
            </>
        );
    }

    return (
        <div>
            {AuthButton}
        </div>
    );
};


