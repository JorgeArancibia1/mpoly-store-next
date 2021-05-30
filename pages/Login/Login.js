import { Button, Form } from "semantic-ui-react";
import Avatar from "../../components/Avatar";
import Soporte from "../../components/Soporte/Soporte";
import * as Yup from "yup";
import { useFormik } from 'formik';
import { loginApi } from "../../api/user";
import { useState } from "react";
import { toast } from "react-toastify";


const Login = () => {

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialLoginValues(),
    validationSchema: Yup.object(validationLoginSchema()),
    onSubmit: async(formData) => {
      console.log(formData);
			setLoading(true);
			const response = await loginApi(formData);
			if (response?.jwt) {
				console.log("Login OK")
				//Reedireccion a la página de cliente
			} else {
				toast.error("El usuario o la contraseña son incorrectos")
			}
			// console.log(response);
			setLoading(false);
    }
  })

	return (
		<>
			<section className="login container-flex-center flex-d-c">
				<Form className="login-form" onSubmit={formik.handleSubmit}>
					<Avatar width="150" height="150" />
          {/* Se le agrega el name="identifier" por strapi */}
					<Form.Input
						name="identifier"
						className="campos-botones"
						type="text"
						placeholder="Correo"
						onChange={ formik.handleChange }
						error= { formik.errors.identifier }
					/>
					<Form.Input
						name="password"
						type="password"
						className="campos-botones"
						placeholder="Contraseña"
						onChange={ formik.handleChange }
						error= { formik.errors.password }
					/>
          <div className="cfc">
					  <Button type="submit" color="primary" className="" loading={loading} >Entrar</Button>
          </div>
				</Form>
			</section>
			<section>
				<Soporte />
			</section>
		</>
	);
};

export default Login;


const initialLoginValues = () => {
  return {
    identifier: "",
    password: ""
  }
}

const validationLoginSchema = () => {
  return {
    identifier: Yup.string().email(true).required(),
    password: Yup.string().required(true)
  }
}