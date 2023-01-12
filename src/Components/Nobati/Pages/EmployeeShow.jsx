import * as React from 'react';
import Header from "../Header/Header";
import {Search} from "../Components/Search";
import {MAIN} from "../../../helpers/colors";
import {Footer} from "../Footer/Footer";
import {EmployeeContent} from "./EmployeeContent";
import EmployeeNobat from "./EmployeeNobat";
import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/authContext";
import axios from "axios";
import {toast} from "react-toastify";
import {Spinner} from "../../index";

const EmployeeShow = () => {
    const {jobId} = useParams();
    const [job, setJob] = useState({});
    const {loading, setLoading} = useContext(AuthContext);
    // console.log(jobId);


    const getjob = () => {
        const fetchData = async () => {
            try {
                setLoading(true);
                await axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.get(`/api/showJob/${jobId}`).then((result) => {
                        // console.log( result.data);
                        setJob(result.data)
                        // console.log( job.name);
                        setLoading(false);
                    })
                });
            } catch (e) {
                toast.error('در ارتباط با سرور مشکلی پیش اومده!');
                setLoading(false);
            }
        }
        fetchData();
    }

    useEffect(() => {
        getjob()
    }, []);


    return (
        <div>
            <Header/>
            <div className={'p-3 border-top'}>
                <Search/>
            </div>
            <div style={{background: MAIN}} className={'row mx-0 col-12 p-5'}>

                {
                    loading ? (<Spinner/>) : (
                        <>
                            <div className={'col-12 col-md-7 mx-3'}>
                                <EmployeeContent job={job}/>
                            </div>
                            <div className={'col-12 col-md-4 mx-3'}>
                                <EmployeeNobat job={job}/>
                            </div>
                        </>
                    )
                }
            </div>
            <Footer/>
        </div>
    );
};
export default EmployeeShow;