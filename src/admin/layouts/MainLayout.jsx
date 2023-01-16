import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Sidebar from "../ui/Sidebar";
import { theme } from  "../ui/theme";

//NOTE Create RTL Cache
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children }) => {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>پنل مدیریت</title>
                    </Helmet>
                    {/* Grid System */}
                    <Grid container sx={{ height: "100vh" }}>
                        <Sidebar />
                        <Grid
                            xs={12}
                            sm={12}
                            md={9}
                            lg={9}
                            xl={10}
                            sx={{ backgroundColor: "secondary.main" }}
                        >
                            <Typography
                                variant="h5"
                                sx={{ textAlign: "center" }}
                            >
                                محتوای اصلی
                            </Typography>

                            {children}
                        </Grid>
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MainLayout;
