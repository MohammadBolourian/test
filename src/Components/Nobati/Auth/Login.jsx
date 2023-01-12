
import * as React from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";



export const Login = () => {
    const name = localStorage.getItem('auth_name');
    const navigate =useNavigate();

    const logout = (e) =>{
        e.preventDefault();
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post("/api/logout").then(res => {
                if (res.data.status === 200) {
                    localStorage.removeItem('auth_token');
                    localStorage.removeItem('auth_name');
                    localStorage.removeItem('auth_mobile');
                    navigate("/");
                } else {
                    console.log("logout error");
                }
            });
        })
    }
    let AuthButton = '';
    if(!localStorage.getItem('auth_token')) {
        AuthButton =(
            <>
                <Link to="/login">login</Link>
                <br/>
                <Link to="/register">register</Link>
                <br/>
            </>
        );
    }else{
        AuthButton =(
            <>
                <p>سلام {name}</p>
                <button type="button" onClick={logout}>logout</button>
                <Link to="/user">پروفایل</Link>
            </>
        );
    }

    return (
        <div>
            {AuthButton}
        </div>
    );
};


