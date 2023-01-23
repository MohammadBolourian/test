import * as React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";

export const EmployeeJob = () => {

    const [employee , setEmployee] = useState([]);
    const [render , setRender] = useState(false);
    const getEmployee= () => {
        const fetchData = async () => {
            try {
                await axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.get('/api/myEmployers').then((result) => {
                        setEmployee(result.data)
                    })
                });
            } catch (e) {
                toast.error('در ارتباط با سرور مشکلی پیش اومده!');
            }
        }
        fetchData();
    }

    useEffect(()=>{
        getEmployee();
        // console.log(employee)
    },[render])



    const x = (e)=>{
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/deleteEmployee?id=${e.target.id}`).then((result) => {
                alert("delete")
            })
        });
        setRender(!render);
    }

    return (
        <div>
            <Link to={'/job/add-employee'}>
            <button className={'btn btn-outline-success me-3 float-start my-4'}>
                اضافه کردن کاربر مجموعه
            </button>
            </Link>
            <table className="table text-center">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">نام کاربری</th>
                    <th scope="col">price</th>
                    <th scope="col">duration</th>
                    <th scope="col">تنظیمات</th>
                </tr>
                </thead>
                <tbody>
                {

                    employee.length > 0 ?
                    employee.map((j,index)=>(

                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{j.name}</td>
                            <td>{j.price}</td>
                            <td>{j.duration}</td>
                            <td>
                                <Link  to={`/job/reserve-times/${j.id}`}>
                                    <button  className={'btn btn-outline-warning mx-2'}>
                                        ساعت کاری
                                    </button>
                                </Link>
                                <button className={'btn btn-outline-primary mx-2'}>
                                    ویرایش
                                </button>
                                <button id={j.id} onClick={x}  className={'btn btn-outline-danger'}>
                                    حذف
                                </button>
                            </td>
                        </tr>
                    )) : null
                }
                </tbody>
            </table>
        </div>
    );
};