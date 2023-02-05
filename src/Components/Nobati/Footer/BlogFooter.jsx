import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Grid2 from "@mui/material/Unstable_Grid2";
import {Typography} from "@mui/material";

const BlogFooter = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
        setOpen2(!open2);
    };

    return (
        <Grid2  container spacing={2}>
            <Grid2 xs={12} md={6}>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'dropItem.main' , borderRadius:'5%' , margin:'auto'}}
                    component="nav"
                >
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary="برای کاربران" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="سوالات متداول" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="راهنمای دریافت نوبت" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Grid2>
            <Grid2 xs={12} md={6}>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'dropItem.main' , borderRadius:'5%' , margin:'auto'}}
                    component="nav"
                >
                    <ListItemButton>
                        <ListItemText primary="ورود/ثبت نام مشاغل" />
                    </ListItemButton>
                </List>
            </Grid2>
            <Grid2 xs={12} md={6}>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'dropItem.main' , borderRadius:'5%' , margin:'auto'}}
                    component="nav"
                >
                    <ListItemButton onClick={handleClick2}>
                        <ListItemText primary="نوبتی 24" />
                        {open2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="سوالات متداول" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="راهنمای دریافت نوبت" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Grid2>
            <Grid2 xs={12} md={6}>
                <Typography variant="body2" gutterBottom>
                    تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق به شرکت زرکاو پردازش آریا (اندرومکس) می‌باشد.
                </Typography>
            </Grid2>
        </Grid2>


    );
}
export default BlogFooter;