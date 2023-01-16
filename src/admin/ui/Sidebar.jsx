import Grid from "@mui/material/Unstable_Grid2";
import {Typography, Avatar, Divider, Box, Hidden} from "@mui/material";
import { grey } from "@mui/material/colors";

const Sidebar = () => {
    return (
        <Grid
            xs={0}
            sm={0}
            md={3}
            lg={3}
            xl={2}
            sx={{ backgroundColor: grey[900] }}
        >
            <Box
                sx={{
                    justifyContent: "center",
                    textAlign: "center",
                    mt: 2,
                }}
            >
               <Hidden mdDown>
                   <Avatar
                       src={require("../../assets/logo.png")}
                       variant="rounded"
                       sx={{ height: 200, width: 200, margin: "0 auto" }}
                   />
               </Hidden>
                <Typography variant="h6" color="whitesmoke">
                    سلام مدیر خوش آمدید
                </Typography>

                <Typography variant="caption" color="whitesmoke">
                    پنل مدیریت نوبتی 24
                </Typography>
                <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
            </Box>
        </Grid>
    );
};

export default Sidebar;
