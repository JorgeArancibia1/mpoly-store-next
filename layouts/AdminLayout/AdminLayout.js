import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar";

const AdminLayout = ({ children }) => {
	return (
		<div className="basic-layout">
			<Header />
			{/* <Navbar /> */}
			<section className="section-container-box-admin border hv-100-header d-flex cfc">
				<Sidebar />
				<div className="right-admin b-purple">{children}</div>
			</section>
		</div>
	);
};

export default AdminLayout;
