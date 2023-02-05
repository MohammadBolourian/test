import * as React from 'react';
import {Search} from "../Components/Search";
import {MAIN} from "../../../helpers/colors";
import {SideBar} from "./SideBar";
import {Content} from "./Content";
import {Footer} from "../Footer/Footer";
import ResponsiveAppBar from "../../MUI/ResponsiveAppBar";
import {Box, Divider} from "@mui/material";

export const Categories = () => {
    return (
        <>
            <ResponsiveAppBar/>
            <div style={{background: MAIN}}>
                <Divider/>
                <Box my={2}>
                    <Search/>
                </Box>
                <Divider/>
                <div className={'row mx-0 col-12 p-5'}>
                    <div className={'d-sm-none d-md-block col-md-3 me-5'}>
                        <SideBar/>
                    </div>
                    <div className={'col col-md-8'}>
                        <Content/>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
};