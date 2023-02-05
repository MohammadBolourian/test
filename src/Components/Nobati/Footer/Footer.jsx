import * as React from 'react';
import logo from './../../../assets/logo.png'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BlogFooter from "./BlogFooter";
export const Footer = () => {
    return (
        <>
            <div className={'w-100'} style={{height: "80px", background: '#f1f5f9'}}/>
            <Container maxWidth="lg">
                <Grid2
                    sx={{mt:2}}
                    container
                       justifyContent="center"
                       spacing={{xs: 2, md: 3}} >
                    <Grid2 xs={12} md={6}>
                        <Box>
                            <Typography
                                color="primary"
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    textAlign: 'center',
                                    mt: 2,
                                    mr: 2,
                                    display: {xs: 'flex'},
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'primary.main',
                                    textDecoration: 'none',
                                }}
                            >
                                نوبتی 24
                            </Typography>
                            <Typography variant="body1" gutterBottom
                                        sx={{mt: 2,  color: 'secondary.main',}}>
                                تجربه مشاوره آنلاین و دریافت نوبت از بهترین آرایشگاه ها و سالن های زیبایی
                            </Typography>
                            <InstagramIcon fontSize="medium"  sx={{mt: 1,  color: 'icon.main',}} />
                            <TelegramIcon fontSize="medium"  sx={{mt: 1, ml:1, color: 'icon.main',}} />
                            <YouTubeIcon fontSize="medium"  sx={{mt: 1, ml:1, color: 'icon.main',}} />
                            <FacebookIcon fontSize="medium"  sx={{mt: 1, ml:1, color: 'icon.main',}} />
                            <TwitterIcon fontSize="medium"  sx={{mt: 1, ml:1, color: 'icon.main',}} />
                            <WhatsAppIcon fontSize="medium"  sx={{mt: 1, ml:1, color: 'icon.main',}} />
                        </Box>
                    </Grid2>

                    <Grid2  xs={12} md={6}  justifyContent="center" textAlign="center" >
                        <Box>
                            <BlogFooter />
                        </Box>
                    </Grid2>

                </Grid2>

            </Container>
        </>
    );
};