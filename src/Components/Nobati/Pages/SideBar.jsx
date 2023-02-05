import * as React from 'react';
import './../HomePage.scss'
import {FormControlLabel, FormGroup, Switch} from "@mui/material";

export const SideBar = () => {
    return (
        <div>
            <div className={'m-2 bg-white rounded-2'}>
                <div className={'d-flex justify-content-between p-3 '}>
                    <span>
                        <h6>فیلتر های انتخاب شده</h6>
                    </span>
                    <button className={'btn btn-outline-danger'}>حذف</button>
                </div>
                <div className={'p-3'}>
                    <p className={'bazdid d-inline-block m-2'}>
                        <span> آرایشگاه <i className="fa fa-times" aria-hidden="true"/></span>
                    </p>
                    <p className={'bazdid d-inline-block m-2'}>
                        <span> بهترین آرایشگر <i className="fa fa-times" aria-hidden="true"/></span>
                    </p>
                    <p className={'bazdid d-inline-block m-2'}>
                        <span> محبوب ترین آرایشگاه <i className="fa fa-times" aria-hidden="true"/></span>
                    </p>
                    <p className={'bazdid d-inline-block m-2'}>
                        <span> آرایشگاه <i className="fa fa-times" aria-hidden="true"/></span>
                    </p>
                </div>
            </div>
            <div className={'m-2 bg-white rounded-2 p-3'}>
                <p className={'cat-title'}>نام دسته بندی</p>
                <div className="overflow-auto h-300px">

                    <div className={'sub-category'}>
                        <small className={'small-category'}>
                            نام زیر دسته
                        </small>
                        <small className={'small-category'}>
                            نام زیر دسته
                        </small>
                        <small className={'small-category'}>
                            نام زیر دسته
                        </small>
                        <small className={'small-category'}>
                            نام زیر دسته
                        </small>
                        <small className={'small-category'}>
                            نام زیر دسته
                        </small>
                        <small className={'small-category'}>
                            نام زیر دسته
                        </small>
                        <small className={'small-category'}>
                            نام زیر دسته
                        </small>
                        <small className={'small-category'}>
                            نام زیر دسته
                        </small>
                        <small className={'small-category'}>
                            نام زیر دسته
                        </small>
                        <small className={'small-category'}>
                            نام زیر دسته
                        </small>
                    </div>
                </div>
            </div>

            <div className={'m-2 bg-white rounded-2 p-3'}>
                <h6>فیلترهای جستجو</h6>
                <div className={'filter-search'}>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="پزشک خوش برخورد" />
                    </FormGroup>
                </div>
                <div className={'filter-search'}>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="پزشک خوش برخورد" />
                    </FormGroup>
                </div>
            </div>
        </div>
    );
};