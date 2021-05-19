import * as Yup from "yup";

export const validationSchema = () => {
  return {
    name: Yup.string().required(true),
    lastname: Yup.string().required("El apellido es obligatorio")
    // email: Yup.string().email(true).required(true)
  }
}