import * as Yup from 'yup';

const mobileIran = /^(09\d{9})$/ ;

export const vorodSchema = Yup.object().shape({
    mobile: Yup.string().required("شماره موبایل الزامی می باشد").matches(mobileIran, 'شماره موبایل اشتباه است'),
    password: Yup.string().required("کلمه عبور الزامی می باشد"),
});