import "../scss/index.scss";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AuthContext from "../context/AuthContext";
import React, { useMemo } from "react";

export default function MyApp({ Component, pageProps }) {
	const authData = useMemo(
		() => ({
			auth: { name: "Agustin", email: "jorge@gmail.com"},
			login: () => null,
			logout: () => null,
			setReloadUser: () => null,
		}),
		[]
	);

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
