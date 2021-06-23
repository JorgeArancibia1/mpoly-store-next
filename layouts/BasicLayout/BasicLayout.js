import { useEffect, useState } from "react";
import { getMeApi } from "../../api/user";
import Header from "../../components/Header"
import useAuth from "../../hooks/useAuth";

const BasicLayout = ({children}) => {

  // Para almacenar los datos del usuario logeado
	const [user, setUser] = useState(undefined)
	const { auth, logout } = useAuth();

	//Con esto se traen los datos del usuario logeado y se almacenan en el estado de "user".
	useEffect(() => {
		(async () => {
			const response = await getMeApi(logout);
			setUser(response)
			// console.log(response);
		})()
	}, [auth])

  return (
    <div className="basic-layout">
      <Header nameUser={ user?.name || '' } isAdmin={user?.nivel? true:false} />
      <div className="container-children">
        { children }
      </div>
    </div>
  )
}

export default BasicLayout