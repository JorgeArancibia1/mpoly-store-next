import "../scss/index.scss";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthContext from "../context/AuthContext";
import React, { useMemo, useState } from "react";
import jwtDecode from "jwt-decode";
import { getToken, setToken, removeToken } from "../api/token";
import { useEffect } from "react";
import { useRouter } from "next/router"

export default function MyApp({ Component, pageProps }) {
	const [auth, setAuth] = useState(undefined);
	const [reloadUser, setReloadUser] = useState(false);
	const router = useRouter();

	console.log(auth);

	useEffect(() => {
		const token = getToken();
		console.log(token);
		if (token) {
			setAuth({
				token,
				idUser: jwtDecode(token).id,
			});
		} else {
			setAuth(null);
		}
		setReloadUser(false)
	}, [reloadUser]);

	const login = (token) => {
		// console.log(token)
		setToken(token);
		setAuth({
			token,
			idUser: jwtDecode(token).id,
		});
	};

	const logout = () => {
		if (auth) {
			removeToken();
			setAuth(null);
			router.push("/")
		}
	}

	// const isLogged = () => {
	// 	return auth ? true : false
	// }

	const authData = useMemo(
		() => ({
			auth,
			login,
			logout,
			setReloadUser
		}),
		[auth] //El useMemo se va a actualizar cuando el usuario cambie de valor
	);

	if (auth === undefined) return null; // Si auth es === a undefined es porque aún está en proceso de ver si está logeado o no.

	return (
		<AuthContext.Provider value={authData}>
			<Component {...pageProps} />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar
				newestOnTopcloseOnClick
				rtl={false}	
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
			/>
		</AuthContext.Provider>
	);
}
