import * as React from 'react';
import {useParams} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {duration} from "@mui/material";

export const ReserveTimes = () => {
    const {employeeId} = useParams();

    const [state, setState] = useState({
        id: employeeId,
        duration: "",
        Saturday: {"start1": 8, "end1": 12, "start2": 18, "end2": 20, "status": 0, "name_day": "Saturday"},
        Sunday: {"start1": 8, "end1": 12, "start2": 18, "end2": 20, "status": 0, "name_day": "Sunday"},
        Monday: {"start1": 8, "end1": 12, "start2": 18, "end2": 20, "status": 0, "name_day": "Monday"},
        Tuesday: {"start1": 8, "end1": 12, "start2": 18, "end2": 20, "status": 0, "name_day": "Tuesday"},
        Wednesday: {"start1": 8, "end1": 12, "start2": 18, "end2": 20, "status": 0, "name_day": "Wednesday"},
        Thursday: {"start1": 8, "end1": 12, "start2": 18, "end2": 20, "status": 0, "name_day": "Thursday"},
        Friday: {"start1": 8, "end1": 12, "start2": 18, "end2": 20, "status": 0, "name_day": "Friday"},
    });

    const dayLoop = [
        {"name": "شنبه", "other": "Saturday", "statusState":state.Saturday.status, "start1State":state.Saturday.start1, "start2State":state.Saturday.start2,"end1State":state.Saturday.end1,"end2State":state.Saturday.end2, "start1": Start1Saturday, "end1":End1Saturday ,"start2": Start2Saturday, "end2":End2Saturday ,"status": StatusSaturday},
        {"name": "یک شنبه", "other": "Sunday" ,"statusState":state.Sunday.status,"start1State":state.Sunday.start1, "start2State":state.Sunday.start2,"end1State":state.Sunday.end1,"end2State":state.Sunday.end2, "start1": Start1Sunday, "end1":End1Sunday , "start2": Start2Sunday, "end2":End2Sunday ,  "status": StatusSunday},
        {"name": "دو شنبه", "other": "Monday", "statusState":state.Monday.status, "start1State":state.Monday.start1, "start2State":state.Monday.start2,"end1State":state.Monday.end1,"end2State":state.Monday.end2, "start1": Start1Monday, "end1":End1Monday , "start2": Start2Monday, "end2":End2Monday ,"status": StatusMonday},
        {"name": "سه شنبه", "other": "Tuesday", "statusState":state.Tuesday.status,"start1State":state.Tuesday.start1, "start2State":state.Tuesday.start2,"end1State":state.Tuesday.end1,"end2State":state.Tuesday.end2,  "start1": Start1Tuesday, "end1":End1Tuesday ,"start2": Start2Tuesday, "end2":End2Tuesday ,"status": StatusTuesday},
        {"name": "چهار شنبه", "other": "Wednesday", "statusState":state.Wednesday.status,"start1State":state.Wednesday.start1, "start2State":state.Wednesday.start2,"end1State":state.Wednesday.end1,"end2State":state.Wednesday.end2,  "start1": Start1Wednesday, "end1":End1Wednesday ,"start2": Start2Wednesday,"end2":End2Wednesday , "status": StatusWednesday},
        {"name": "پنج شنبه", "other": "Thursday", "statusState":state.Thursday.status, "start1State":state.Thursday.start1, "start2State":state.Thursday.start2,"end1State":state.Thursday.end1,"end2State":state.Thursday.end2,  "start1": Start1Thursday, "end1":End1Thursday ,"start2": Start2Thursday,"end2":End2Thursday , "status": StatusThursday},
        {"name": "جمعه", "other": "Friday", "statusState":state.Friday.status ,"start1State":state.Friday.start1, "start2State":state.Friday.start2,"end1State":state.Friday.end1,"end2State":state.Friday.end2,  "start1": Start1Friday, "end1":End1Friday ,"start2": Start2Friday, "end2":End2Friday ,"status": StatusFriday},
    ];

    const handleInput = (e) => {
        e.persist();
        setState({...state, [e.target.name]: e.target.value})
    }


    function StatusSaturday(e) {
        setState({
            ...state,
            Saturday: {
                ...state.Saturday,
                status: e.target.value
            }
        });
    }

    function Start1Saturday(e) {
        setState({
            ...state,
            Saturday: {
                ...state.Saturday,
                start1: e.target.value
            }
        });
    }

    function End1Saturday(e) {
        setState({
            ...state,
            Saturday: {
                ...state.Saturday,
                end1: e.target.value
            }
        });
    }

    function Start2Saturday(e) {
        setState({
            ...state,
            Saturday: {
                ...state.Saturday,
                start2: e.target.value
            }
        });
    }

    function End2Saturday(e) {
        setState({
            ...state,
            Saturday: {
                ...state.Saturday,
                end2: e.target.value
            }
        });
    }


    // sunday ==============>

    function StatusSunday(e) {
        setState({
            ...state,
            Sunday: {
                ...state.Sunday,
                status: e.target.value
            }
        });
    }

    function Start1Sunday(e) {
        setState({
            ...state,
            Sunday: {
                ...state.Sunday,
                start1: e.target.value
            }
        });

    }

    function End1Sunday(e) {
        setState({
            ...state,
            Sunday: {
                ...state.Sunday,
                end1: e.target.value
            }
        });
    }

    function Start2Sunday(e) {
        setState({
            ...state,
            Sunday: {
                ...state.Sunday,
                start2: e.target.value
            }
        });
    }

    function End2Sunday(e) {
        setState({
            ...state,
            Sunday: {
                ...state.Sunday,
                end2: e.target.value
            }
        });
    }

    // =================>monday
    function StatusMonday(e) {
        setState({
            ...state,
            Monday: {
                ...state.Monday,
                status: e.target.value
            }
        });
    }


    function Start1Monday(e) {
        setState({
            ...state,
            Monday: {
                ...state.Monday,
                start1: e.target.value
            }
        });
    }

    function End1Monday(e) {
        setState({
            ...state,
            Monday: {
                ...state.Monday,
                end1: e.target.value
            }
        });
    }

    function Start2Monday(e) {
        setState({
            ...state,
            Monday: {
                ...state.Monday,
                start2: e.target.value
            }
        });
    }

    function End2Monday(e) {
        setState({
            ...state,
            Monday: {
                ...state.Monday,
                end2: e.target.value
            }
        });
    }


    //============================>Tuesday
    function StatusTuesday(e) {
        setState({
            ...state,
            Tuesday: {
                ...state.Tuesday,
                status: e.target.value
            }
        });
    }


    function Start1Tuesday(e) {
        setState({
            ...state,
            Tuesday: {
                ...state.Tuesday,
                start1: e.target.value
            }
        });
    }

    function End1Tuesday(e) {
        setState({
            ...state,
            Tuesday: {
                ...state.Tuesday,
                end1: e.target.value
            }
        });
    }

    function Start2Tuesday(e) {
        setState({
            ...state,
            Tuesday: {
                ...state.Tuesday,
                start2: e.target.value
            }
        });
    }

    function End2Tuesday(e) {
        setState({
            ...state,
            Tuesday: {
                ...state.Tuesday,
                end2: e.target.value
            }
        });
    }

    //============================>Wednesday
    function StatusWednesday(e) {
        setState({
            ...state,
            Wednesday: {
                ...state.Wednesday,
                status: e.target.value
            }
        });
    }

    function Start1Wednesday(e) {
        setState({
            ...state,
            Wednesday: {
                ...state.Wednesday,
                start1: e.target.value
            }
        });
    }

    function End1Wednesday(e) {
        setState({
            ...state,
            Wednesday: {
                ...state.Wednesday,
                end1: e.target.value
            }
        });
    }

    function Start2Wednesday(e) {
        setState({
            ...state,
            Wednesday: {
                ...state.Wednesday,
                start2: e.target.value
            }
        });
    }

    function End2Wednesday(e) {
        setState({
            ...state,
            Wednesday: {
                ...state.Wednesday,
                end2: e.target.value
            }
        });
    }

    //============================>Thursday
    function StatusThursday(e) {
        setState({
            ...state,
            Thursday: {
                ...state.Thursday,
                status: e.target.value
            }
        });
    }

    function Start1Thursday(e) {
        setState({
            ...state,
            Thursday: {
                ...state.Thursday,
                start1: e.target.value
            }
        });
    }

    function End1Thursday(e) {
        setState({
            ...state,
            Thursday: {
                ...state.Thursday,
                end1: e.target.value
            }
        });
    }

    function Start2Thursday(e) {
        setState({
            ...state,
            Thursday: {
                ...state.Thursday,
                start2: e.target.value
            }
        });
    }

    function End2Thursday(e) {
        setState({
            ...state,
            Thursday: {
                ...state.Thursday,
                end2: e.target.value
            }
        });
    }

    //============================>Friday
    function StatusFriday(e) {
        setState({
            ...state,
            Friday: {
                ...state.Friday,
                status: e.target.value
            }
        });
    }

    function Start1Friday(e) {
        setState({
            ...state,
            Friday: {
                ...state.Friday,
                start1: e.target.value
            }
        });
    }

    function End1Friday(e) {
        setState({
            ...state,
            Friday: {
                ...state.Friday,
                end1: e.target.value
            }
        });
    }

    function Start2Friday(e) {
        setState({
            ...state,
            Friday: {
                ...state.Friday,
                start2: e.target.value
            }
        });
    }

    function End2Friday(e) {
        setState({
            ...state,
            Friday: {
                ...state.Friday,
                end2: e.target.value
            }
        });
    }


    const submit = (e) => {
        e.preventDefault();

        // const formData = new FormData();
        // formData.append("duration", state.duration);


        // console.log(formData);
        console.log(state);
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post("/api/inserttime", state).then(res => {
                console.log(res);
                if (res.data.status === 200) {
                    toast.success(res.data.message);
                } else {
                    toast.error("خطایی پیش آمده بعدا تلاش کنید", {icon: "💣"});
                }
            });
        });
    }

    return (
        <>
            <form onSubmit={submit}>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">روز های هفته</th>
                        <th scope="col"> انتخاب ساعت کاری شیفت صبح</th>
                        <th scope="col">انتخاب ساعت کاری شیفت عصر</th>
                    </tr>
                    </thead>
                    <tbody>
                    {dayLoop.map((listValue, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">
                                    <div className="form-check w-auto">
                                        <input type="checkbox" id="flexCheckDefault"
                                               onChange={listValue.status}
                                               value={listValue.statusState ? 0 : 1}
                                        />
                                        <label className="form-check-label me-1" htmlFor="flexCheckDefault">
                                            {listValue.name}
                                        </label>
                                    </div>
                                </th>
                                <td>
                                    <div className={'d-inline-flex'}>
                                        <select value={listValue.start1State}
                                                onChange={listValue.start1} className="form-select"
                                                aria-label="Default select example">
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                        </select>
                                        <span className={'mx-3'}>تا</span>
                                        <select value={listValue.end1State}
                                                onChange={listValue.end1} className="form-select"
                                                aria-label="Default select example">
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                        </select>
                                    </div>

                                </td>

                                <td>
                                    <div className={'d-inline-flex'}>
                                        <select onChange={listValue.start2}
                                                value={listValue.start2State} className="form-select"
                                                aria-label="Default select example">
                                            <option value="18">6</option>
                                            <option value="19">7</option>
                                            <option value="20">8</option>
                                        </select>
                                        <span className={'mx-3'}>تا</span>
                                        <select onChange={listValue.end2}
                                                value={listValue.end2State} className="form-select"
                                                aria-label="Default select example">
                                            <option value="18">6</option>
                                            <option value="19">7</option>
                                            <option value="20">8</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}


                    </tbody>
                </table>

                <div className={'d-flex'}>
                    <span className={'mx-3'}>بازه زمانی هر نوبت</span>
                    <select onChange={handleInput} name="duration" className="form-select w-50"
                            aria-label="Default select example">
                        <option value="0.25">15 دقیقه</option>
                        <option value="0.5">30 دقیقه</option>
                        <option value="1">60 دقیقه</option>
                        <option value="1.5">90 دقیقه</option>
                        <option value="2">120 دقیقه</option>
                    </select>
                </div>
                <button type="submit" className={'btn btn-outline-success'}>ثبت</button>
            </form>
        </>
    );
};