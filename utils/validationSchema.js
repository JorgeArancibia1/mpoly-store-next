import * as Yup from "yup";

export const validationSchema = () => {
  return {
    name: Yup.string().required(true),
    // lastname: Yup.string().required("El apellido es obligatorio"),
    lastname: Yup.string().required(true),
    lastname2: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
    RUT: Yup.string().required(true),
    phoneNumber: Yup.string().required(true),
    region: Yup.string().required(true),
    city: Yup.string().required(true),
    comuna: Yup.string().required(true),
    street: Yup.string().required(true),
    homeNumber: Yup.string().required(true),
  }
}