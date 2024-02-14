import * as yup from 'yup';

export const infoValidatorSchema = yup.object().shape({
    driverName: yup
        .string()
        .min(2, 'First name is too Short!')
        .max(50, 'First name is too Long!')
        .required('First name is required')
        .matches(/^[a-zA-Z0-9]+$/, "Driver name must contain only alphabets and numbers allowed"),
    carModel: yup
        .string()
        .min(2, 'Car model is too Short!')
        .max(50, 'Car model is too Long!')
        .required('Car model is required')
        .matches(/^[a-zA-Z0-9 -]+$/, "Car model must contain only alphabets, numbers, spaces, and hyphens"),
    plateNumber: yup
        .string()
        .required('Plate number is required')
        .matches(/^[a-zA-Z0-9 -]+$/, "Plate number must contain only alphabets, numbers, spaces, and hyphens"),
    complaints: yup
        .array()
        .of(yup.string())
        .required('Complaints is required'),
})
