import * as React from 'react';
import {JobUser} from "../Components/JobUser";
import {Box, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

export const Content = () => {
    return (
        <>
            <Grid2 container spacing={2} marginBottom={1}>
                <Grid2 xs={5}>
                    <Box sx={{ minWidth: 120 }} >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">مرتب سازی</InputLabel>
                            <Select
                                autoWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="مرتب سازی"
                            >
                                <MenuItem value={10}>پیشفرض</MenuItem>
                                <MenuItem value={20}>محبوب ترین</MenuItem>
                                <MenuItem value={30}>خوش برخورد ترین</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid2>
                <Grid2 xs={5}>
                    <Box sx={{ minWidth: 120 }} >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">نزدیک ترین نوبت</InputLabel>
                            <Select
                                autoWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="نزدیک ترین نوبت"
                            >
                                <MenuItem value={10}>پیشفرض</MenuItem>
                                <MenuItem value={20}>محبوب ترین</MenuItem>
                                <MenuItem value={30}>خوش برخورد ترین</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid2>
                <Grid2 xs={2}>
                    <Typography variant="subtitle2" gutterBottom sx={{float:'right'}}>
                        18 نتیجه
                    </Typography>
                </Grid2>
            </Grid2>
                <JobUser/>
        </>

    );
};