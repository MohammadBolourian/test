import * as Yup from 'yup';

export const EditNewUserSchema = Yup.object().shape({
    name: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
});
