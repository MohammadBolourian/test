
import * as React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {HomePage} from "../../index";


export const Logout = () => {

    const navigate =useNavigate();

    const logout = () =>{
        // e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post("/api/logout").then(res => {
                if (res.data.status === 200) {
                    localStorage.removeItem('auth_token');
                    localStorage.removeItem('auth_name');
                    localStorage.removeItem('auth_mobile');
                    localStorage.removeItem('auth_type');
                   navigate("/");
                } else {
                    console.log("logout error");
                }
            });
        })
    }
    useEffect(()=>{
        logout()
    },[])

    return(
        <>
            <HomePage/>
        </>
    )

};