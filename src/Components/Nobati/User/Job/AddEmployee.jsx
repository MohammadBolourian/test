import * as React from 'react';
import axios from "axios";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useState} from "react";

export const AddEmployee = () => {

    const [state, setState] = useState({
        name: "",
        body: "",
        duration: "",
        price: "",
    });
    const [pic, setPic] = useState([]);

    const handleImage = (e) => {
        setPic({image: e.target.files[0]})
    }
    const handleInput = (e) => {
        e.persist();
        setState({...state, [e.target.name]: e.target.value})
    }

    const submitProduct = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", pic.image);
        formData.append("name", state.name);
        formData.append("body", state.body);
        formData.append("duration", state.duration);
        formData.append("price", state.price);

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post("/api/registerEmployee", formData).then(res => {
                console.log(res);
                if (res.data.status === 200) {
                    toast.success(res.data.message);
                } else if (res.data.status === 220) {
                    toast.warning(res.data.message);
                } else {
                    toast.error("خطایی پیش آمده بعدا تلاش کنید", {icon: "💣"});
                }
            });
        });
    }



return (
    // <div className={''}>
    //     <Formik
    //         initialValues={{
    //             name: "",
    //             // cat_id: "",
    //             body: "",
    //             image: "",
    //             duration: "",
    //             price: "",
    //         }}
    //         onSubmit={async (values) => {
    //             try {
    //                 await axios.get('/sanctum/csrf-cookie').then(response => {
    //                     axios.post("/api/registerEmployee", values).then(res => {
    //                         if (res.data.status === 200) {
    //                             toast.success(res.data.message);
    //                         } else if (res.data.status === 220) {
    //                             toast.warning(res.data.message);
    //
    //                         } else {
    //                             toast.error("خطایی پیش آمده بعدا تلاش کنید", {icon: "💣"});
    //                         }
    //                     });
    //                 });
    //             } catch (e) {
    //                 toast.error('در ارتباط با سرور مشکلی پیش اومده!');
    //             }
    //         }}
    //     >
    //
    //     <Form>
    //      <div className={'row'}>
    //          <div className="mb-3 col-sm-12 col-md-6">
    //              <label htmlFor="exampleInputEmail1" className="form-label">نام کامل کارمند</label>
    //              <Field
    //                  name="name"
    //                  type="text" className="form-control"
    //              />
    //              <div id="emailHelp" className="form-text">مانند : محمد محمدی ، این نام برای نمایش پروفایل شخص به کار میرود</div>
    //          </div>
    //          <div className="mb-3 col-sm-12 col-md-6">
    //              <label className="form-label">توضیحات</label>
    //              <Field name="body" type="text" className="form-control" />
    //          </div>
    //          <div className="mb-3 col-sm-12 col-md-6">
    //              <label className="form-label">duration</label>
    //              <Field name="duration" type="text" className="form-control" />
    //          </div>
    //
    //          <div className="mb-3 col-sm-12 col-md-6">
    //              <label className="form-label">price</label>
    //              <Field name="price" type="text" className="form-control" />
    //          </div>
    //
    //
    //          <div className="mb-3 col-sm-12 col-md-6">
    //              <label htmlFor="formFile" className="form-label">آپلود عکس پروفایل</label>
    //             <Field name="image" type="file" />
    //
    //          </div>
    //          <hr/>
    //         {/*<div className={'text-center my-4'}>*/}
    //         {/*    <button className={'btn btn-outline-success'}>اضافه کردن تصاویر گالری</button>*/}
    //         {/*</div>*/}
    //         {/* <div className="mb-3 col-sm-12 col-md-6 d-flex">*/}
    //         {/*     <label htmlFor="formFile" className="form-label">گالری</label>*/}
    //         {/*     <input className="form-control mx-2" type="file" id="formFile"/>*/}
    //         {/*     <button className={'btn btn-outline-danger me-3'}>حذف</button>*/}
    //         {/* </div>*/}
    //      </div>
    //         <button type="submit" className="btn btn-primary">ثبت</button>
    //     </Form>
    //     </Formik>
    // </div>

    <>
        <form onSubmit={submitProduct} encType="multipart/form-data">
            <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">name:</label>
                <input type="text" className="form-control" id="name" placeholder="Enter name" name="name"
                       onChange={handleInput} value={state.name}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">body:</label>
                <input type="text" className="form-control" id="body" placeholder="Enter body" name="body"
                       onChange={handleInput} value={state.body}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="duration" className="form-label">duration:</label>
                <input type="text" className="form-control" id="duration" placeholder="Enter duration" name="duration"
                       onChange={handleInput} value={state.duration}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">body:</label>
                <input type="text" className="form-control" id="price" placeholder="Enter price" name="price"
                       onChange={handleInput} value={state.price}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">pic:</label>
                <input type="file" className="form-control" id="image" placeholder="Enter pic" name="image"
                       onChange={handleImage}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
);
}
