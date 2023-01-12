
import * as React from 'react';
import Header from "../Header/Header";

import {Footer} from "../Footer/Footer";
import {ErrorMessage, Field, Form, Formik} from "formik";

import {Link, useNavigate   } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import {Helmet} from "react-helmet-async";
import Spinner from "../../Spinner";

import {useContext, useEffect} from "react";
import {AuthContext} from "../../../context/authContext";
import {vorodSchema} from "../../Validation/VorodValidation";
import './LoginAll.Module.css'

export const LoginAll = () => {



    const navigate = useNavigate();
    const {loading,setLoading } = useContext(AuthContext);
    const {sms,setSms } = useContext(AuthContext);


    useEffect( ()=>{

        const script = document.createElement("script");
        script.src = "/js/mdb.min.js";
        script.async = true;
        document.body.appendChild(script);

    })

    return (
        <>
            <Helmet>
                <title>ورود در نوبتی 24</title>
            </Helmet>
            <Header/>

            {/*Formik*/}
            <Formik
                initialValues={{
                    mobile: "",
                    password: "",
                }}
                validationSchema={vorodSchema}
                onSubmit={async (values) => {
                    setLoading(true);
                    try {
                        await axios.get('/sanctum/csrf-cookie').then(response => {
                            axios.post("/api/login", values).then(res => {
                                console.log(values);
                                if (res.data.status === 200) {
                                    localStorage.setItem('auth_token', res.data.token);
                                    localStorage.setItem('auth_name', res.data.username);
                                    localStorage.setItem('auth_mobile', values.mobile);
                                    setLoading(false);
                                    toast.success("خوش آمدید");
                                    navigate('/');
                                } else if (res.data.status === 220) {
                                    localStorage.setItem('auth_token', res.data.token);
                                    localStorage.setItem('auth_name', res.data.username);
                                    localStorage.setItem('auth_mobile', values.mobile);
                                    setLoading(false);
                                    toast.warning(res.data.message);
                                    setSms(true);
                                    navigate('/test', {state: {mob: values.mobile}});
                                }
                                else if (res.data.status === 401) {
                                    setLoading(false);
                                    toast.warning('اطلاعات وارد شده صحیح نمی باشد');
                                }
                                else {
                                    setLoading(false);
                                    toast.error("خطایی پیش آمده بعدا تلاش کنید", {icon: "💣"});
                                }
                            });
                        });
                    } catch (e) {
                        toast.error('در ارتباط با سرور مشکلی پیش اومده!');
                        setLoading(false);
                        navigate('/');

                    }
                }}
            >

                {
                    loading ? <Spinner/> : (
                        <Form>
                            <section className="h-100 gradient-form">
                                <div className="container py-5 h-100">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                        <div className="col-xl-10">
                                            <div className="card rounded-3 text-black">
                                                <div className="row g-0">
                                                    <div className="col-lg-6">
                                                        <div className="card-body p-md-5 mx-md-4">

                                                            <div className="text-center">
                                                                <img
                                                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                                                    style={{width: '185px'}} alt="logo"/>
                                                                <h4 className="mt-1 mb-5 pb-1">نوبتی 24 - سامانه رزرو
                                                                    آنلاین</h4>
                                                            </div>

                                                            <p>ورود به پنل خود در نوبتی 24</p>

                                                            <div className="d-flex flex-row align-items-center mb-4">
                                                                <i className="fas fa-mobile-alt fa-lg me-3 fa-fw"/>
                                                                <div className="form-outline flex-fill mb-0">
                                                                    <Field
                                                                        name="mobile"
                                                                        type="tel"
                                                                        className="form-control"
                                                                    />
                                                                    <label className="form-label"
                                                                           htmlFor="form3Example1c">شماره موبایل</label>

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
                                                                    <label className="form-label"
                                                                           htmlFor="form3Example1c">کلمه عبور</label>
                                                                </div>

                                                            </div>
                                                            <ErrorMessage
                                                                name="password"
                                                                render={(msg) => (
                                                                    <div className="text-danger">{msg}</div>
                                                                )}
                                                            />

                                                            <div className="text-center pt-1 mb-5 pb-1">
                                                                <input
                                                                    type="submit"
                                                                    className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                                    value="ورود"
                                                                />
                                                                <a className="text-muted" href="#!">کلمه عبور خود را
                                                                    فراموش کرده اید ؟</a>
                                                            </div>

                                                            <div
                                                                className="d-flex align-items-center justify-content-center pb-4">
                                                                <p className="mb-0 me-2">هنوز ثبت نام نکرده اید ؟</p>
                                                                <Link to={"/register"}>
                                                                    <button type="button"
                                                                            className="btn btn-outline-danger">رفتن به
                                                                        صفحه ثبت نام
                                                                    </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                                            <h4 className="mb-4">نوبت بگیر در نوبتی 24</h4>
                                                            <p className="small mb-0">
                                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                                                چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                                                                بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                                                                برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                                                                هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت
                                                                و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و
                                                                متخصصان را می طلبد
                                                            </p>
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
            <Footer/>
        </>
    );
};