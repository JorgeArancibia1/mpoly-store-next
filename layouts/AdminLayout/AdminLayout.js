import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/user";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

const AdminLayout = ({ children }) => {
	const [user, setUser] = useState(undefined);
	
	const { auth, logout } = useAuth();
	const router = useRouter();

  console.log('USER PD =>',user)

	useEffect(() => {
		(async () => {
			const response = await getMeApi(logout);
			setUser(response || null);
		})();
	}, [auth]);

	if (user === undefined) return null;

	if (!auth) {
		router.replace("/");
		return null;
	}

	return (
		<div className="basic-layout">
			<Header />
			{/* <Navbar /> */}
			<section className="section-container-box-admin hv-100-header d-flex cfc">
				<Sidebar />
				<div className="right-admin">{children}</div>
			</section>
		</div>
	);
};

export default AdminLayout;
