import Avatar from "../Avatar"
import Link from "next/link"
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";
import useAuth from "../../hooks/useAuth";


let avatarcito = 'https://res.cloudinary.com/dacsggoox/image/upload/v1620600640/avatar_rkcnm2.png'

const Header = () => {

  const { logout, auth } = useAuth(); // useAuth devuelve todo lo que hay en authData() de _app.js

  console.log(auth);

  return (
    <section className="barra-title">
      <div className="principal-title">
        <Link href="/">
          <h1 className="title-header pointer">MPoly Store</h1>
        </Link>
      </div>
      <div className="container-right-head">

        {
          auth &&
            <div className="container-right-head" >
              <Avatar configClass= "img-avatar" img= { avatarcito } alt= "avatar del header" width= "40" height= "40"/> 
              <h3 className="name">Jorge Arancibia</h3>
            </div>
        }
        

        <IconButton aria-label="delete" onClick={logout}>
          <ExitToAppIcon  />
        </IconButton>
      </div>
    </section>
  );
};

export default Header
