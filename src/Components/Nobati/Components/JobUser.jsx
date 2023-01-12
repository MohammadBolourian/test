import * as React from 'react';
import styles from "../Pages/Content.module.scss";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../../context/authContext";
import {NotFound, Spinner} from "../../index";
import ShowJob from "../User/Job/ShowJob";

export const JobUser = () => {
    const {loading, jobs} = useContext(AuthContext);
    return (
       <>
           {
               loading ? (<Spinner />) : (  <div>
                   {
                       jobs.length > 0 ? (
                           jobs.map((j)=>(
                               <ShowJob
                                   key={j.id}
                                   job={j}
                               />
                           ))
                       ) : (
                           <p>هیچ اطلاعاتی برای نمایش وجود ندارد</p>
                       )
                   }
               </div> )
           }


       </>
    );
};