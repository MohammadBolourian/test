
import * as React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {loginSchema} from "../../../Validation/LoginValidation";
import axios from "axios";
import {toast} from "react-toastify";
import Spinner from "../../../Spinner";
import {Link} from "react-router-dom";

export const EditNewJob = () => {
    return (



        <div className={'my-4'}>


            <div className={'col-12'}>
                <Formik
                    initialValues={{
                        name: "",
                        cat_id: "",
                        body: "",
                        address: "",
                        city: "",
                        location: "",
                        service_id: "",
                        tel: "",

                    }}
                    validationSchema={loginSchema}
                    onSubmit={async (values) => {
                        setLoading(true);
                        try {
                            await axios.get('/sanctum/csrf-cookie').then(response => {
                                axios.post("/api/register", values).then(res => {
                                    if (res.data.status === 200) {
                                        localStorage.setItem('auth_token', res.data.token);
                                        localStorage.setItem('auth_name', res.data.username);
                                        localStorage.setItem('auth_mobile', res.data.mobile);
                                        localStorage.setItem('auth_type', 1);
                                        setLoading(false);
                                        setSms(true);
                                        toast.success("کاربر با موفقیت ثبت نام شد");
                                        navigate('/test' ,{state:{ mob:values.mobile}});
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
                            navigate('/');

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



            <div className={'form-check-inline'}>
                <label htmlFor={'name'}> نام کسب و کار</label>
                <input type={'text'} className={'form-control'} placeholder={'مانند : مکانیکی جلال'}/>
            </div>
            <div className={'form-check-inline'}>
                <label htmlFor={'name'}>شماره تماس محل کار</label>
                <input type={'text'} className={'form-control'} placeholder={'051-4422xxx'}/>
            </div>
            <div className="form-check-inline">
                <label htmlFor="formFile" className="form-label">آپلود عکس بنر</label>
                <input className="form-control" type="file" id="formFile"/>
            </div>
            <div className={'form mt-4'}>
                <label htmlFor={'name'}>آدرس</label>
                <input type={'text'} className={'form-control'} placeholder={'آدرس محل کار را وارد کنید'}/>
            </div>
            <button className={'btn btn-outline-success me-3 mt-4 float-start'}>ثبت تغییرات</button>
        </div>
    );
};