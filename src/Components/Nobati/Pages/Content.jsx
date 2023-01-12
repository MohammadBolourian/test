import * as React from 'react';
import {JobUser} from "../Components/JobUser";

export const Content = () => {
    return (
        <>
            <div className={'row'}>
                <div className={'m-2 p-2 bg-white rounded-2'} style={{width :'max-content'}}>
                    <span>مرتب سازی:</span>
                    <select className="form-select d-inline w-auto">
                        <option selected value="1">پیشفرض</option>
                        <option value="2">محبوب ترین</option>
                        <option value="3">خوش برخورد ترین</option>
                    </select>
                </div>
                <div className={'m-2 p-2 bg-white rounded-2'} style={{width :'max-content'}}>
                    <span>نزدیک ترین نوبت:</span>
                    <select className="form-select d-inline w-auto">
                        <option selected value="10">پیشفرض</option>
                        <option value="20">محبوب ترین</option>
                        <option value="30">خوش برخورد ترین</option>
                    </select>
                </div>
                <span className={'w-auto mx-auto mt-4'}>18 نتیجه</span>
            </div>
                <JobUser/>
        </>

    );
};