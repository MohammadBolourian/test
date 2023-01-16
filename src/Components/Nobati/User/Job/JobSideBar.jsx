import * as React from 'react';
import styles from './../UserInfo.module.scss'
import {NavLink} from "react-router-dom";
export const JobSideBar = () => {
    let activeStyle = {
        color: "cornflowerblue",
    };
    const name = localStorage.getItem('auth_name');
    const mobile = localStorage.getItem('auth_mobile');
    return (
        <div className={'bg-white p-3 rounded-3'} style={{width:'max-content'}}>
            <div className={'d-flex'}>
                <img className={styles.img} src={require('./../../../../assets/images.jpg')} alt={'profile'}/>
              <div className={'p-1 me-3'}>
                  <p>{name}</p>
                  <p>{mobile}</p>
              </div>
            </div>
            <hr/>
            <div className={'p-2'}>
                <NavLink to="/job/edit-job"  style={({ isActive }) =>
                    isActive ? activeStyle : undefined } >
                    <p className={styles.fonticon}>
                        <i className="fa fa-pencil-square-o" aria-hidden="true"/> ویرایش اطلاعات
                    </p>
                </NavLink>

                <NavLink to="/job/employee-job"  style={({ isActive }) =>
                    isActive ? activeStyle : undefined } >
                    <p className={styles.fonticon}>
                        <i className="fa fa-user-o ms-2" aria-hidden="true"/>کاربران مجموعه
                    </p>
                </NavLink>
            </div>

        </div>
    );
};