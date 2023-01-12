import * as React from 'react';
import styles from './UserInfo.module.scss'
import {NavLink} from "react-router-dom";
export const UserSideBar = () => {
    let activeStyle = {
        color: "cornflowerblue",
    };
    const name = localStorage.getItem('auth_name');
    const mobile = localStorage.getItem('auth_mobile');
    return (
        <div className={'bg-white p-3 rounded-3'}>
            <div className={'d-flex'}>
                <img className={styles.img} src={require('./../../../assets/images.jpg')} alt={'profile'}/>
              <div className={'p-1 me-3'}>
                  <p>{name}</p>
                  <p>{mobile}</p>
              </div>
            </div>
            <hr/>
            <div className={'p-2'}>
                <NavLink to="/user/editUser"  style={({ isActive }) =>
                    isActive ? activeStyle : undefined } >
                    <p className={styles.fonticon}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"/> ویرایش اطلاعات
                    </p>
                </NavLink>
                <NavLink to="/user/my-reserve"  style={({ isActive }) =>
                    isActive ? activeStyle : undefined } >
                <p className={styles.fonticon}>
                    <i className="fa fa-calendar-check-o ms-2" aria-hidden="true"/> نوبت های من
                </p>
                </NavLink>
                <NavLink to="/user/my-list"  style={({ isActive }) =>
                    isActive ? activeStyle : undefined } >
                <p className={styles.fonticon}>
                    <i className="fa fa-bookmark-o ms-2" aria-hidden="true"/> لیست های من
                </p>
                </NavLink>
                <NavLink to="/user/my-users"  style={({ isActive }) =>
                    isActive ? activeStyle : undefined } >
                    <p className={styles.fonticon}>
                        <i className="fa fa-user-o ms-2" aria-hidden="true"/>کاربران زیر مجموعه
                    </p>
                </NavLink>
            </div>

        </div>
    );
};