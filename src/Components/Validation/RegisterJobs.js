import * as Yup from 'yup';

const mobileIran = /^(09\d{9})$/ ;
export const registerJobSchema = Yup.object().shape({
    name: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    mobile: Yup.string().required("شماره موبایل الزامی می باشد").matches(mobileIran, 'شماره موبایل اشتباه است'),
    password: Yup.string().required("کلمه عبور الزامی می باشد").min(6, 'کلمه عبور خیلی کوتاه است - حداقل کلمه عبور 6 کاراکتر می باشد'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'تکرار کلمه عبور اشتباه است')
});
