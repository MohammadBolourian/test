import * as React from 'react';
import {Link} from "react-router-dom";

const EmployeeNobat = ({job}) => {
    return (
        <div>
            <h5><b>دریافت نوبت اینترنتی</b></h5>
            <div className="card p-4">
                <h6><i className="fa fa-laptop ms-2" aria-hidden="true"/><b>نوبت اینترنتی و مراجعه حضوری</b></h6>
                <hr/>
                <p className={'border-end pe-2'}>امکان دریافت زودترین نوبت</p>
                <p className={'border-end pe-2'}>هزینه :120,000  تومان</p>
                <div className={'text-center'}>
                    <Link to={'/booking'}><button className={'btn btn-primary w-75'}>دریافت نوبت</button></Link>
                </div>
            </div>
            <h5 className={'mt-4'}><b>آدرس و تلفن تماس</b></h5>
            <div className={'bg-white p-4 rounded-2'}>
                <div className={'bg-light rounded-2 p-2'}>
                    <span>
                        <b>محل کار {job.name}</b>
                        <span className={'float-start text-danger'}> گزارش تلفن و آدرس صحیح</span>
                    </span>
                    <p className={'mt-2'}>{job.address}</p>
                    <div className={'text-center'}>
                        <button className={'btn btn-outline-primary w-50'}>
                            <i className="fa fa-phone ms-2" aria-hidden="true"/>مشاهده شماره تلفن</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EmployeeNobat;