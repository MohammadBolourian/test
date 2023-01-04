
import * as React from 'react';
import Header from "../Header/Header";
import {Search} from "../Components/Search";
import {MAIN} from "../../../helpers/colors";
import {Footer} from "../Footer/Footer";
import {ErrorMessage, Field, Form, Formik} from "formik";

import { loginSchema } from "../../Validation/LoginValidation";
import {Link , useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import {Helmet} from "react-helmet-async";
import Spinner from "../../Spinner";

import {useContext, useState} from "react";
import {AuthContext} from "../../../context/authContext";

import {Test} from "./test";

export const LoginUser = () => {
    const navigate = useNavigate();
    const {loading,setLoading} = useContext(AuthContext);
    const {mob,setMob} = useState();
    setMob("123");
    return (
        <div>
            <Helmet>
                <title>ثبت نام در نوبتی 24</title>
                <script src="/js/mdb.min.js" type="text/javascript" />
            </Helmet>
            <Header/>
            <div className={'p-3 border-top'}>
                <Search/>
            </div>

                    <div style={{background:MAIN}} className={'row mx-0 col-12 p-5'}>
                        <div className={'col-12'}>
                            <Formik
                                initialValues={{
                                    name: "",
                                    mobile: "",
                                    password: "",
                                }}
                                validationSchema={loginSchema}
                                onSubmit={async (values) => {
                                    setLoading(true);

                                    try {
                                        await axios.get('/sanctum/csrf-cookie').then(response => {
                                            axios.post("/api/register", values).then(res => {
                                                if (res.data.status === 200) {
                                                    console.log(res);
                                                    localStorage.setItem('auth_token', res.data.token);
                                                    localStorage.setItem('auth_name', res.data.name);
                                                    localStorage.setItem('auth_mobile', res.data.mobile);
                                                    setLoading(false);
                                                    toast.success("کاربر با موفقیت ثبت نام شد");
                                                    navigate('/');

                                                } else if (res.data.status === 220) {
                                                    setLoading(false);
                                                    toast.warning(res.data.message);
                                                } else {
                                                    setLoading(false);
                                                    toast.error("خطایی پیش آمده بعدا تلاش کنید", {icon: "💣"});
                                                }
                                            });
                                        });
                                    } catch (e) {
                                        toast.error('در ارتباط با سرور مشکلی پیش اومده!');
                                        setLoading(false);
                                    }
                                }}
                            >
                                {

                                    loading ? <Spinner/> : (
                                <Form>
                                    <section className="vh-100" >
                                        <div className="container h-100">
                                            <div className="row d-flex justify-content-center align-items-center h-100">
                                                <div className="col-lg-12 col-xl-11">
                                                    <div className="card text-black" >
                                                        <div className="card-body p-md-5">
                                                            <div className="row justify-content-center">
                                                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ثبت نام در نوبتی 24</p>

                                                                    <div className="mx-1 mx-md-4">

                                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                                            <i className="fas fa-user fa-lg me-3 fa-fw"/>
                                                                            <div className="form-outline flex-fill mb-0">
                                                                                <Field
                                                                                    name="name"
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                />
                                                                                <label className="form-label"
                                                                                       htmlFor="form3Example1c">نام و نام
                                                                                    خانوادگی</label>

                                                                            </div>

                                                                        </div>
                                                                        <ErrorMessage
                                                                            name="name"
                                                                            render={(msg) => (
                                                                                <div className="text-danger">{msg}</div>
                                                                            )}
                                                                        />

                                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                                            <i className="fas fa-mobile-alt fa-lg me-3 fa-fw"/>
                                                                            <div className="form-outline flex-fill mb-0">
                                                                                <Field
                                                                                    name="mobile"
                                                                                    type="tel"
                                                                                    className="form-control"
                                                                                />
                                                                                <label className="form-label" htmlFor="form3Example1c">شماره موبایل</label>

                                                                            </div>

                                                                        </div>
                                                                        <ErrorMessage
                                                                            name="mobile"
                                                                            render={(msg) => (
                                                                                <div className="text-danger">{msg}</div>
                                                                            )}
                                                                        />
                                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                                            <i className="fas fa-lock fa-lg me-3 fa-fw"/>
                                                                            <div className="form-outline flex-fill mb-0">
                                                                                <Field
                                                                                    name="password"
                                                                                    type="password"
                                                                                    className="form-control"
                                                                                />
                                                                                <label className="form-label" htmlFor="form3Example1c">کلمه عبور</label>

                                                                            </div>

                                                                        </div>
                                                                        <ErrorMessage
                                                                            name="password"
                                                                            render={(msg) => (
                                                                                <div className="text-danger">{msg}</div>
                                                                            )}
                                                                        />
                                                                        <div className="d-flex flex-row align-items-center mb-4">
                                                                            <i className="fas fa-key fa-lg me-3 fa-fw"/>
                                                                            <div className="form-outline flex-fill mb-0">
                                                                                <Field
                                                                                    name="passwordConfirmation"
                                                                                    type="password"
                                                                                    className="form-control"
                                                                                />
                                                                                <label className="form-label" htmlFor="form3Example1c">تکرار کلمه عبور</label>

                                                                            </div>

                                                                        </div>
                                                                        <ErrorMessage
                                                                            name="passwordConfirmation"
                                                                            render={(msg) => (
                                                                                <div className="text-danger">{msg}</div>
                                                                            )}
                                                                        />
                                                                        <div className="mx-2">
                                                                            <input
                                                                                type="submit"
                                                                                className="btn btn-success"
                                                                                value="ساخت مخاطب"
                                                                            />
                                                                            <Link
                                                                                to={"/"}
                                                                                className="btn btn-danger mx-2"
                                                                            >
                                                                                انصراف
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                                    <img
                                                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                                        className="img-fluid" alt="Sample image"/>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </Form>
                                    )
                                }
                            </Formik>
                        </div>
                    </div>

                    <Test mob={mob}/>
            <Footer/>

        </div>
    );
};