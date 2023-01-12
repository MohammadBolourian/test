import * as Yup from 'yup';

export const verificationCodeSchema = Yup.object().shape({
    verificationCode: Yup.string().required("کد احراز هویت الزامی می باشد").min(6, '  کد  6 کاراکتر می باشد'),
});
