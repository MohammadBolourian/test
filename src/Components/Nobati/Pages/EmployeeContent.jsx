import * as React from 'react';
import styles from "./Content.module.scss";

export const EmployeeContent = ({job}) => {
    return (
        <div>
            <div className={'p-3 bg-white'}>
                <div className={'mx-3'}>
                    <span className={styles.icon}>
                        <i className="fa fa-bookmark-o mx-1" aria-hidden="true"/>
                        ذخیره
                    </span>
                    <span className={styles.icon}>
                        <i className="fa fa-share-alt mx-1" aria-hidden="true"/>
                       اشتراک گذاری
                    </span>
                    <span className={styles.icon}>
                        <i className="fa fa-pencil-square-o mx-1" aria-hidden="true"/>
                        گزارش
                    </span>
                    <span className={styles.see}><i className="fa fa-eye mx-1 " aria-hidden="true"/> 723</span>
                    <br/>
                </div>
                <div className={'row'}>
                    <div className={' mx-auto p-2 bg-light rounded-2 row'} style={{width: '95%'}}>
                        <div className={'col'} style={{maxWidth: 'fit-content'}}>
                            <img className={styles.img} src={require('./../../../assets/images.jpg')} alt={'profile'}/>
                        </div>
                        <div className={'col mt-4'}>
                            <div>
                                <h5 className={'d-inline'}>{job.name}</h5>
                            </div>
                            <p className={'m-1'}>نام محل کار : گالری اندرومکس</p>
                        </div>
                    </div>
                </div>
                <div className={'text-center mt-2'}>
                    <span className={'badge bg-success'}>
                        <i className={`fa fa-thumbs-o-up ${styles.like2}`} aria-hidden="true"/>
                        <span className={styles.like2}>90%</span>
                    </span>
                    رضایت
                    <span className={'me-1'}> (297 نظر)</span>
                </div>
            </div>

            <br/>
            <h4>گالری</h4>
            {/*gallery*/}
            <div className={'p-3 bg-white'}>
                <div className={'row'}>
                    <div className={' mx-auto p-2 rounded-2 row'} style={{width: '95%'}}>
                        <div className={'col'} style={{maxWidth: 'fit-content'}}>
                            <img className={styles.gallery} src={require('./../../../assets/images.jpg')}
                                 alt={'profile'}/>
                            <img className={styles.gallery} src={require('./../../../assets/images.jpg')}
                                 alt={'profile'}/>
                            <img className={styles.gallery} src={require('./../../../assets/images.jpg')}
                                 alt={'profile'}/>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <h4>اطلاعات</h4>
            <div className={'p-3 bg-white'}>
                <div className={'row'}>
                    <div className={' mx-auto p-2 rounded-2 row'} style={{width: '95%'}}>
                        <p className={'text-center'}>
                            مشاوره ازدواج و بررسی شخصیت زوجین با تست های استاندارد
                            آموزش مهارتهای زندگی : خودشناسی ، اقزایش اعتماد به نفس ، جرات ورزی ، مدیریت استرس و خشم ،
                            تفکر خلاق ، قدرت تصمیم گیری و ....
                            تشخیص و درمان مشکلات زناشویی : اختلال ارگاسم ، زودانزالی ، سردمزاجی ، بیمیلی جنسی ، اختلال
                            نعوذ ، زودانزالی ، واژینیسموس ، تنوع طلبی جنسی
                            تشخیص و درمان مشکلات و اختلالات جنسی : اعتیاد جنسی ، همجنس گرایی ، سادیسم ، مازوخیسم ،
                            خودارضایی ، فتیش (یادگارخواهی) ، آسیب های تجاوز
                            تشخیص و درمان مشکلات فردی : افسردگی ،اضطراب ، استرس ، وسواس فکری و عملی ، فوبیا ، خشم ، دو
                            قطبی ، اختلالات شخصیت (چند شخصیتی ، خودشیفته ، پارانویید (شکاک و بدبین ) ،مرزی ، وابسته،
                            ضداجتماعی ، وسواسی ، اسکیزویید ، نمایشی)
                        </p>
                    </div>
                </div>
            </div>
            <br/>
            <h4>نظرات در مورد جویی</h4>
            <div className={'p-3 bg-white'}>
                <div className={'row'}>
                    <div className={' mx-auto p-2 rounded-2 row'} style={{width: '95%'}}>
                        <div className={'text-center mt-2'}>
                    <span className={'badge bg-success'}>
                        <i className={`fa fa-thumbs-o-up ${styles.like2}`} aria-hidden="true"/>
                        <span className={styles.like2}>90%</span>
                    </span>
                            رضایت
                            <span className={'me-1'}> (297 نظر)</span>
                        </div>

                        <div className={'mt-4 col-12 d-flex'}>
                            <div className={'col-4 d-inline ms-4 flex-fill'}>برخورد مناسب</div>
                            <div className={`progress flex-fill ${styles.bar}`}>
                                <div className="progress-bar bg-success" role="progressbar" style={{width:'25%'}}
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                            <span className={'col-2 flex-fill mx-2'}> 2.5</span>
                        </div>

                        <div className={'mt-4 col-12 d-flex'}>
                            <div className={'col-4 d-inline ms-4 flex-fill'}>مهارت و تخصص</div>
                            <div className={`progress flex-fill ${styles.bar}`}>
                                <div className="progress-bar bg-success" role="progressbar" style={{width:'50%'}}
                                     aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                            <span className={'col-2 flex-fill mx-2'}> 5</span>
                        </div>
                        <div className={'mt-4 col-12 d-flex'}>
                            <div className={'col-4 d-inline ms-4 flex-fill'}>زمانبندی</div>
                            <div className={`progress flex-fill ${styles.bar}`}>
                                <div className="progress-bar bg-success" role="progressbar" style={{width:'75%'}}
                                     aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"/>
                            </div>
                            <span className={'col-2 mx-2 flex-fill'}> 7.5</span>
                        </div>
                    </div>
                </div>
                <div className={'d-flex justify-content-between mt-5'}>
                    <span>نظر خود را به اشتراک بگذارید:</span>
                    <button className={'btn btn-outline-success'}>ثبت نظر</button>
                </div>
                <div className="card mt-2">
                    <div className="card-header">
                        نظر توسط مانیکا
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-success"><i className={'fa fa-thumbs-o-up'} aria-hidden="true"/> توصیه می‌کنم</h5>
                        <p className="card-text">
                            دریک کلام بهترین مشاور و روانپزشکی که تا حالا صحبت کردم ارامش از کلامشون جاری هست
                        </p>
                        <span className={'float-start'}><i className="fa fa-reply" aria-hidden="true"/> پاسخ</span>
                    </div>
                    <div className="card-footer text-muted ps-5 pe-5 pt-2">
                        <span>پاسخ جویی</span>
                        <p>ازنظربنده هم بهترین روانپزشک هستن ایشون، صبور ودانا</p>
                        2 days ago
                    </div>
                </div>
                <div className="card mt-2">
                    <div className="card-header">
                        نظر توسط مانیکا
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-warning"><i className={'fa fa-thumbs-o-down'} aria-hidden="true"/> توصیه نمی‌کنم</h5>
                        <p className="card-text">
                            دریک کلام بهترین مشاور و روانپزشکی که تا حالا صحبت کردم ارامش از کلامشون جاری هست
                        </p>
                        <span className={'float-start'}><i className="fa fa-reply" aria-hidden="true"/> پاسخ</span>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
                <div className={'text-center mt-4'}>
                    <button className={'btn btn-outline-secondary'}>نمایش نظرات بیشتر</button>
                </div>
            </div>

        </div>
    );
};