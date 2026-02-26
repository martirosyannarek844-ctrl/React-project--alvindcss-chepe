import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  country: yup.string().required('Country is required'),
  phone: yup.string().required('Phone is required'),
  password: yup
    .string()
    .min(6, 'Min 6 characters')
    .required('Password is required'),
});