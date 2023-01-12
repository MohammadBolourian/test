import * as React from 'react';
import {loginSchema} from "../../Validation/LoginValidation";
import axios from "axios";
import {toast} from "react-toastify";
import Spinner from "../../Spinner";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../context/authContext";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {EditNewUserSchema} from "../../Validation/EditNewUserValidation";

const EditNewUser = () => {
    const {loading, setLoading,state} = useContext(AuthContext);
    const [city,setCity] = useState([]);
    const [init,setInit] = useState(0);
    const name = localStorage.getItem('auth_name');
    const changeState = (e)=>{
       // alert(e.target.value)
            const fetchData =  () => {
                try {
                    axios.get('/sanctum/csrf-cookie').then(response => {
                        axios.get(`/api/showCitiesOfState?id=${e.target.value}`).then((result) => {
                          setCity(result.data);
                        })
                    });
                } catch (e) {
                    toast.error('در ارتباط با سرور مشکلی پیش اومده!');
                }
            }
        fetchData();
    }

    return (
        <div>
            <Formik
                initialValues={{
                    name: name,
                }}
                validationSchema={EditNewUserSchema}
                onSubmit={async (values) => {
                    setLoading(true);
                    try {
                        await axios.get('/sanctum/csrf-cookie').then(response => {
                            axios.post("/api/register", values).then(res => {
                                if (res.data.status === 200) {
                                    localStorage.setItem('auth_name', res.data.username);
                                    setLoading(false);
                                    toast.success("کاربر با موفقیت ویرایش شد");
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
                            <div className={'container'}>
                                <div className={'form-check-inline'}>
                                    <label className="form-label"
                                           htmlFor="form3Example1c">نام و نام
                                        خانوادگی</label>
                                    <Field
                                        name="name"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <ErrorMessage
                                name="name"
                                render={(msg) => (
                                    <div className="text-danger">{msg}</div>
                                )}
                            />
                            <select onChange={changeState} className="custom-select">
                                <option selected value={-1}>انتخاب استان</option>
                                {
                                    state.map((j) =>(
                                        <option key={j.id} value={j.id}>{j.title}</option>
                                    ))
                                }
                            </select>

                            <select className="custom-select">
                                {
                                    city.length > 0 ?
                                            city.map((j,index) =>(
                                                <option key={j.id} value={j.id}>{j.title}</option>
                                            ))
                                     :(
                                        <option selected >ابتدا استان را انتخاب کنید</option>
                                    )

                                }
                            </select>

                            <input
                                type="submit"
                                className="btn btn-primary"
                                value="ثبت تغییرات"
                            />

                        </Form>)
                    }

                    </Formik>
                    </div>)
                }
                export default EditNewUser;