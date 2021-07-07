import Avatar from "../Avatar";
import Link from "next/link";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";
import useAuth from "../../hooks/useAuth";
import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";

let avatarcito =
	"https://res.cloudinary.com/dacsggoox/image/upload/v1620600640/avatar_rkcnm2.png";

const Header = ({ nameUser = "Jorge Arancibia", isAdmin=false }) => {
	const { logout, auth } = useAuth(); // useAuth devuelve todo lo que hay en authData() de _app.js
	const router = useRouter();

	return (
		<section className="barra-title">
			<div className="principal-title">
				<Link href="/">
					<h1 className="title-header pointer">MPoly Store</h1>
				</Link>
			</div>
			{
				isAdmin && <Button type="buton" color="blue" onClick={()=> router.push("/ProductosDisponibles")}>
					ir al panel del administrador
				</Button>
			}
			<div className="container-right-head">
				{auth ? (
					<div className="container-right-head">
						<Avatar
							configClass="img-avatar"
							img={avatarcito}
							alt="avatar del header"
							width="40"
							height="40"
						/>
						<h3 className="name">{nameUser}</h3>
						<IconButton aria-label="delete" onClick={logout}>
							<ExitToAppIcon />
						</IconButton>
					</div>
				) : (
					<div>
						<Button href="/Registro">Registrarse</Button>
						<Button href="/Login">Iniciar Sesión</Button>
					</div>
				)}
			</div>
		</section>
	);
};

export default Header;
