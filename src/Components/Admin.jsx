import { HomePage, NotFound} from "./index";
import {Navigate, Route, Routes} from "react-router-dom";

import {Categories} from "./Nobati/Pages/Categories";
import EmployeeShow from "./Nobati/Pages/EmployeeShow";
import Booking from "./Nobati/Pages/Booking";
import Info from "./Nobati/User/Info";
import EditNewUser from "./Nobati/User/EditNewUser";
import MyReserve from "./Nobati/User/MyReserve";
import MyList from "./Nobati/User/MyList";
import MyUsers from "./Nobati/User/MyUsers";
import Jobs from "./Nobati/User/Job/Jobs";
import {EditNewJob} from "./Nobati/User/Job/EditNewJob";
import {EmployeeJob} from "./Nobati/User/Job/EmployeeJob";
import {AddEmployee} from "./Nobati/User/Job/AddEmployee";
import {ReserveTimes} from "./Nobati/User/Job/ReserveTimes";
import {LoginUser} from "./Nobati/Auth/LoginUser";
import {Test} from "./Nobati/Auth/test";
import {useEffect, useState} from "react";
import {AuthContext} from "../context/authContext";
import {LoginAll} from "./Nobati/Auth/LoginAll";
import axios from "axios";
import {toast} from "react-toastify";
import MainLayout from "../admin/layouts/MainLayout";
import {RegisterJobs} from "./Nobati/Auth/RegisterJobs";
import {Logout} from "./Nobati/Auth/Logout";

const Admin = () => {

    const PAGE_NUMBER = 1;

    const [loading , setLoading] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [category , setCategory] = useState([]);
    const [state , setState] = useState([]);
    const [sms , setSms] = useState(false);
    const [page, setPage] = useState(PAGE_NUMBER);


    const getState = () =>{
        const fetchData =  () => {
            try {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.get('/api/showStates').then((result) => {
                        setState(result.data)
                    })
                });
            } catch (e) {
                toast.error('در ارتباط با سرور مشکلی پیش اومده!');
            }
        }
        fetchData();
    }

    const getCategory = () =>{
        const fetchData =  () => {
            try {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.get('/api/Cats').then((result) => {
                        setCategory(result.data)
                    })
                });
            } catch (e) {
                toast.error('در ارتباط با سرور مشکلی پیش اومده!');
            }
        }
        fetchData();
    }

    const getalljobs= () => {
        const fetchData = async () => {
            try {
                await axios.get('/sanctum/csrf-cookie').then(response => {
                     axios.get(`/api/showJobs?page=${page}`).then((result) => {
                        setJobs([...jobs,...result.data.data])
                    })
                });
            } catch (e) {
                toast.error('در ارتباط با سرور مشکلی پیش اومده!');
                setLoading(false);
            }
        }
        fetchData();
    }
    const [loggedIn, setLoggedIn] = useState(null);

    // category
    useEffect(()=>{
        getCategory();
        getState();
        const loggedUser = localStorage.getItem('auth_token');
        setLoggedIn(Boolean(loggedUser));
        console.log(loggedIn);
    },[])

    // scroll infite
    useEffect(() => {
        getalljobs();
    }, [page]);

    const scrollToEnd = () =>{
        setPage(page +1 );
    }
        window.onscroll = function (){
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ){
                scrollToEnd()
            }
        }



    return (
        <AuthContext.Provider value={{
             loading,
             setLoading,
            sms,
            setSms,
            jobs,
            setJobs,
            category,
            state,
        }}>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                        <Route path="/admin" element={<MainLayout/>}/>
                <Route path="/test" element={<Test/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/register" element={loggedIn == null ? <Navigate to="/" /> : <LoginUser/> }/>
                <Route path="/login" element={loggedIn == null ? <Navigate to="/" /> : <LoginAll/> } />
                <Route path="/category" element={<Categories/>}/>
                <Route path="/show/:jobId" element={<EmployeeShow/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/user"   element={localStorage.getItem('auth_type') === '2' ? <Navigate to="/job" /> : <Info/> } >
                    <Route index element={<EditNewUser />} />
                    <Route path="editUser" element={<EditNewUser />} />
                    <Route path="my-reserve" element={<MyReserve />} />
                    <Route path="my-list" element={<MyList />} />
                    <Route path="my-users" element={<MyUsers />} />
                </Route>
                <Route path="/register-job" element={<RegisterJobs/>}/>
                <Route path="/job" element={<Jobs/>}>
                    <Route index  element={<EditNewJob/>} />
                    <Route path="edit-job" element={<EditNewJob/>} />
                    <Route path="employee-job" element={<EmployeeJob/>} />
                    <Route path="add-employee" element={<AddEmployee/>} />
                    <Route path="reserve-times/:employeeId" element={<ReserveTimes/>} />

                </Route>

                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </AuthContext.Provider>
    )
}
export default Admin;