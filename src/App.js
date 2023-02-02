import {BrowserRouter} from "react-router-dom";
import Admin from "./Components/Admin";
import {ToastContainer} from "react-toastify";
import {HelmetProvider, Helmet} from "react-helmet-async"

import {ThemeProvider, createTheme} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import {theme} from "./Components/MUI/theme";
//NOTE Create Custom Theme


//NOTE Create RTL Cache
const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});


const App = () => {
    return (
        <>
            <CacheProvider value={cacheRTL}>
                <ThemeProvider theme={theme}>
                    <HelmetProvider>
                        <ToastContainer rtl={true} position="top-right" theme="colored"/>
                        <BrowserRouter>
                            <Admin/>
                        </BrowserRouter>
                    </HelmetProvider>
                </ThemeProvider>
            </CacheProvider>

        </>
    );
}

export default App;
