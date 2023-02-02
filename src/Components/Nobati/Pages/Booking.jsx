import * as React from 'react';
import Header from "../Header/Header";
import {Search} from "../Components/Search";
import {MAIN} from "../../../helpers/colors";
import {Footer} from "../Footer/Footer";
import styles from "./Content.module.scss";
import axios from "axios";
import {toast} from "react-toastify";
import {useContext, useEffect, useState} from "react";
import dayjs from 'dayjs';
import AdapterJalali from "@date-io/date-fns-jalali";

import moment, {now} from "jalali-moment";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Stack, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import {DesktopDateTimePicker, MobileDateTimePicker, StaticDatePicker} from "@mui/x-date-pickers";
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-input": {
            border: 0,
            borderRadius: 3,
            color: "red",
            fontSize: 24,
            fontFamily: 'Yekan'
        }
    }
});

 const Booking = () => {

     const [value, setValue] = React.useState(dayjs(now()));

     // const  [init , setInit] = useState(0);
     // const {loading, setLoading} = useContext(AuthContext);
     //
     // const getalltimes= () => {
     //     const fetchData = async () => {
     //         try {
     //             setLoading(true);
     //             await axios.get('/sanctum/csrf-cookie').then(response => {
     //                 axios.get('/api/showtime').then((result) => {
     //
     //                     // console.log(result.data.data)
     //                     // console.log(result.data.data.length)
     //                     if(result.data.status===200){
     //                     setWork(result.data.data)
     //                     // console.log(work);
     //
     //                     }
     //                     //  console.log(result.data.data[0].date[0].date)
     //                     setLoading(false);
     //                 })
     //             });
     //         } catch (e) {
     //             toast.error('در ارتباط با سرور مشکلی پیش اومده!');
     //             setLoading(false);
     //         }
     //     }
     //     fetchData();
     // }
     //
     // useEffect(() => {
     //     // console.log("work");
     //     console.log(work[0]);
     // }, [work])
     //
     const [reserve , setReserve] = useState({
         duration:0,
         taken:[],
         startDateTime:new Date(),
         endDateTime:new Date(),
         workTimes:[{
             "days":"",
             "hours":"",
         }],
     })
     // useEffect(()=>{
     //
     // },[])


     const classes = useStyles();

    return (
        <div>
            <Header/>
            <div className={'p-3 border-top'}>
                <Search/>
            </div>
            <Stack spacing={5}>



            <LocalizationProvider   dateAdapter={AdapterJalali} >
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    openTo="day"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                        console.log(value);
                    }}
                    renderInput={(params) => <TextField className={classes.root} {...params}
                     /> }
                />

                {/*<DesktopDateTimePicker*/}
                {/*        open={true}*/}
                {/*    displayStaticWrapperAs="desktop"*/}
                {/*    openTo="day"*/}
                {/*    disableMaskedInput*/}
                {/*    label="For desktop"*/}
                {/*    value={value}*/}
                {/*    onChange={(newValue) => {*/}
                {/*        setValue(newValue);*/}
                {/*        console.log(value);*/}
                {/*    }}*/}
                {/*    renderInput={(params) => <TextField {...params} sx={{*/}
                {/*        '.MuiPickersPopper-root': {width:'500px' },*/}
                {/*        'css-epd502':{width: 500}*/}

                {/*    }}/>}*/}
                {/*/>*/}
            </LocalizationProvider>
            </Stack>

                {/*<DateTimePicker*/}
                {/*    name="fromDate"*/}

                {/*    mask="YYYY/MM/dd HH:mm"*/}
                {/*    value={reserve.startDateTime}*/}
                {/*    // onChange={(newValue)=>*/}
                {/*    // {*/}
                {/*    //     console.log(newValue);*/}
                {/*    // }*/}
                {/*    // }*/}
                {/*    onChange={(newValue)=>setReserve({...reserve, startDateTime:moment(newValue).format('YYYY/MM/DD HH:mm')})}*/}
                {/*    renderInput={(params) => <TextField {...params}  id="exitDate" inputProps={{ ...params.inputProps, placeholder: " از تاریخ  " }} style={{ fontFamily:"Vazir"}} />}*/}
                {/* date={reserve.startDateTime} />*/}
                {/*<MobileDateTimePicker*/}
                {/*    value={value}*/}
                {/*    onChange={(newValue) => {*/}
                {/*        setValue(newValue);*/}
                {/*        console.log(value);*/}
                {/*    }}*/}
                {/*    label="With error handler"*/}
                {/*    onError={console.log}*/}
                {/*    minDate={dayjs('2018-01-01T00:00')}*/}
                {/*    // inputFormat="YYYY/MM/DD hh:mm"*/}
                {/*    // mask="____/__/__ __:__ _M"*/}
                {/*    renderInput={(params) => <TextField {...params} />}*/}
                {/*/>*/}


            {/*<DatePicker*/}
            {/*    mapDays={({ date }) => {*/}
            {/*        let props = {}*/}
            {/*        let isWeekend = date.weekDay.index === 6*/}

            {/*        if (isWeekend) props.className = "highlight highlight-red"*/}

            {/*        return props*/}
            {/*    }}*/}
            {/*    calendar={persian}*/}
            {/*    locale={persian_fa}*/}
            {/*    calendarPosition="bottom-right"/>*/}

            {/*<div style={{background:MAIN}} className={'row mx-0 col-12 p-5'}>*/}
            {/*    {*/}
            {/*        loading ? (<Spinner/>) : (*/}
            {/*            <>*/}
            {/*                <div className={'col-12 col-md-7 mx-3 bg-white p-4 rounded-3'}>*/}
            {/*                    <h6><b>انتخاب زمان نوبت</b></h6>*/}
            {/*                    <div className={'row'}>*/}
            {/*                     */}
            {/*                        <div className={'col-9'}>*/}
            {/*                            <div className="d-flex  flex-wrap bd-highlight mb-3">*/}
            {/*                                <input type="radio" className="btn-check" name="select_day" id="11"*/}
            {/*                                       autoComplete="off" />*/}
            {/*                                <label className={`btn btn-outline-secondary mx-1 ${styles.rezervbtn}`} htmlFor="11">*/}
            {/*                                    8-9*/}
            {/*                                </label>*/}
            {/*                                <input type="radio" className="btn-check" name="select_day" id="12"*/}
            {/*                                       autoComplete="off" />*/}
            {/*                                <label className={`btn btn-outline-secondary mx-1 ${styles.rezervbtn}`} htmlFor="12">*/}
            {/*                                    9-10*/}
            {/*                                </label>*/}
            {/*                                <input type="radio" className="btn-check" name="select_day" id="13"*/}
            {/*                                       autoComplete="off" />*/}
            {/*                                <label className={`btn btn-outline-secondary mx-1 ${styles.rezervbtn}`} htmlFor="13">*/}
            {/*                                    10-11*/}
            {/*                                </label>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}

            {/*                </div>*/}
            {/*                <div className={'col-12 col-md-4 mx-3 bg-white p-4 rounded-3 '} style={{height:'max-content'}}>*/}
            {/*                    <div className={'row'}>*/}
            {/*                        <div className={' mx-auto p-2 bg-light rounded-3 row'} style={{width: '95%'}}>*/}
            {/*                            <div className={'col'} style={{maxWidth: 'fit-content'}}>*/}
            {/*                                <img className={styles.img} src={require('./../../../assets/images.jpg')} alt={'profile'}/>*/}
            {/*                            </div>*/}
            {/*                            <div className={'col mt-4'}>*/}
            {/*                                <div>*/}
            {/*                                    <h5 className={'d-inline'}>جویی تریبیانی - متخصص مشاوره</h5>*/}
            {/*                                </div>*/}
            {/*                                <p className={'m-1'}>نام محل کار : گالری اندرومکس</p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</div>*/}
            <Footer/>
        </div>
    );
};
 export default Booking;