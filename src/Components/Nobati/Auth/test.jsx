import * as React from 'react';

import {useContext, useState} from "react";
import { useLocation, useNavigate} from "react-router-dom";
import "./test.Module.css"
import {AuthContext} from "../../../context/authContext";
import {NotFound} from "../../index";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {toast} from "react-toastify";
import {verificationCodeSchema} from "../../Validation/verificationCodeValidation";
import Spinner from "../../Spinner";

export const Test = () => {

    const {sms, setSms} = useContext(AuthContext);
    const {loading, setLoading} = useContext(AuthContext);
    // const [code, SetCode] = useState();
    const navigate = useNavigate();

    // const handleClose = () => setShow(false);
    //  const handleShow = () => setShow(true);
    const location = useLocation();




    // useEffect(() => {
    //     if (!code) {
    //             navigate("/")
    //     }
    // }, []);
    let auth_mobile = localStorage.getItem('auth_mobile');
    let mobileValue ={
        "mobile":auth_mobile
    }
    const resendCode = (e) =>{
        e.preventDefault();
        console.log(mobileValue)
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post("/api/reSendVerificationCode",mobileValue).then(res => {
                console.log('code send')
                if (res.data.status === 200) {
                    toast.success(res.data.message);
                    console.log('code send 1')
                }
                else if (res.data.status === 220) {
                    toast.warning(res.data.message);
                    console.log('code send 2')
                }
                else {
                    console.log("logout error");
                }
            });
        })
    }

    return (

        <>
            {
                sms ? (
                    <Formik
                        initialValues={{
                            verificationCode: "",
                        }}
                        validationSchema={verificationCodeSchema}
                        onSubmit={async (values) => {
                            console.log(values);
                            setLoading(true);
                            try {
                                await axios.get('/sanctum/csrf-cookie').then(response => {
                                    axios.post("/api/registerVerify", values).then(res => {
                                        console.log(values);
                                        if (res.data.status === 200) {
                                            setLoading(false);
                                            toast.success("کاربر تایید شد");
                                            navigate('/');
                                        } else if (res.data.status === 403) {
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
                                navigate('/');

                            }
                        }}
                    >
                        {
                            loading ? <Spinner/> : (
                                <Form>
                                    <div id="auth_box">
                                        <div className="auth_box_title">
                                            <span>تایید شماره تلفن همراه</span>
                                        </div>

                                        <div className="alert alert-success">
                                            <span>برای شماره موبایل {location.state.mob} کد تایید ارسال شد</span>
                                        </div>
                                        <div>
                                                <div className="form-group">
                                                    <div className="field_name">کد تایید را وارد نمایید</div>
                                                    <div className="number_input_div">
                                                        <Field
                                                            name="verificationCode"
                                                            type="text"
                                                            className="number_input number"
                                                            maxLength="6"
                                                        />
                                                        {/*<input*/}
                                                        {/*    className='number_input number'*/}
                                                        {/*    type='text'*/}
                                                        {/*    maxLength="6"*/}
                                                        {/*    name='username'*/}
                                                        {/*    value={code}*/}
                                                        {/*    onChange={e => SetCode(e.target.value)}*/}
                                                        {/*/>*/}
                                                    </div>
                                                    <div className="line_box">
                                                        <div className="line"/>
                                                        <div className="line"/>
                                                        <div className="line"/>
                                                        <div className="line"/>
                                                        <div className="line"/>
                                                        <div className="line"/>
                                                    </div>
                                                    <ErrorMessage
                                                        name="verificationCode"
                                                        render={(msg) => (
                                                            <div className="text-danger">{msg}</div>
                                                        )}
                                                    />
                                                    <p id="resend_active_code">
                                                        <input
                                                            className='number_input number d-none'
                                                            type='text'
                                                            maxLength="6"
                                                            name='mobile'
                                                            value={auth_mobile}
                                                        />
                                                        <button type="button" onClick={resendCode}> <span>ارسال مجدد کد</span></button>

                                                    </p>

                                                    <div className="text-center mx-auto" id="active_account_btn">
                                                        <input
                                                            type="submit"
                                                            className="title send_btn confirm mx-auto"
                                                            value="تایید و ارسال"
                                                        />
                                                        {/*<span className="title" onClick={sent}>تایید و ارسال</span>*/}
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                            </Formik>
                    ) :
                            <NotFound/>
                        }


                        {/*    <input*/}
                        {/*        className='form-input'*/}
                        {/*        type='text'*/}
                        {/*        name='username'*/}
                        {/*        placeholder='Enter your username'*/}
                        {/*        value={code}*/}
                        {/*        onChange={e => setCode(e.target.value)}*/}
                        {/*    />*/}


                    </>

                );
            };